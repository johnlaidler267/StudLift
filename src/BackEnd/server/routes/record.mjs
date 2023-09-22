// IMPORT modules
import express from "express"; // Import Express.js for building the router
import db from "../db/conn.mjs"; // Import the database connection

//IMPORT Classes
import UserCart from '../../../FrontEnd/Cart/Classes/UserCart.js'
import Wishlist from '../../../FrontEnd/Wishlist/Classes/Wishlist.js'

//IMPORT MongoDB ObjectId
import { ObjectId } from "mongodb"; // Import ObjectId for working with MongoDB IDs

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Create an Express router instance

const router = express.Router();
console.log("router set up");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to handle user registration

router.post('/register', async (req, res) => {
    try {
        // Retrieve user data from the request body
        let { firebase, email, password, firstName, lastName, gender } = req.body;

        const defaultAddress = {
            AddLine1: '',
            AddLine2: '',
            City: '',
            State: '',
            Zip: ''
        }

        const defaultCard = {
            Name: '',
            Type: 'Discover it®',
            Number: '',
            Expiration: '',
            CVV: ''
        }

        //-> Validate and sanitize user input (Implement validation logic here)
        if (gender === "1") gender = 'Male';
        else if (gender === "2") gender = 'Female';
        else gender = 'Other';

        // Create a new user in the database
        const newUser = {
            Firebase: firebase,
            Email: email,
            Password: password, // Remember to hash the password
            First: firstName,
            Last: lastName,
            Gender: gender,
            Wishlist: new Wishlist([], firebase),
            Billing: defaultAddress,
            Shipping: defaultAddress,
            Cards: [defaultCard],
            DefaultCardIdx: 0,
            Cart: new UserCart([], firebase, 0),
            Orders: []
        };

        let collection = await db.collection("Test");
        let results = await collection.insertOne(newUser);

        res.send(results).status(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to return user details

router.get('/:id', async (req, res) => {
    try {
        // Retrieve user data from the request body
        let firebaseId = req.params.id;
        let collection = await db.collection("Test");
        let result = await collection.findOne({ Firebase: firebaseId });

        if (!result) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update shipping addr.

router.patch('/updateShipping/:id', async (req, res) => {
    let firebaseId = req.params.id;
    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            Shipping: req.body.Shipping
        }
    };
    console.log("Shipping request received ")
    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update billing addr.

router.patch('/updateBilling/:id', async (req, res) => {
    let firebaseId = req.params.id;
    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            Billing: req.body.Billing
        }
    };
    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update CC.

router.patch('/updateCard/:id', async (req, res) => {
    let firebaseId = req.params.id;
    const query = { Firebase: firebaseId };
    let updates = {};

    //If its marked default, update this as well
    if (req.body.isChecked) {
        updates = {
            $set: {
                DefaultCardIdx: req.body.cardIndex,
                Cards: req.body.Cards
            }
        }
    }
    else {
        updates = {
            $set: {
                Cards: req.body.Cards
            }
        };
    }

    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to add new CC.

router.patch('/addCard/:id', async (req, res) => {
    let firebaseId = req.params.id;
    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            Cards: req.body
        }
    };
    console.log("The request body is: " + JSON.stringify(req.body))
    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to retrieve all Products by Type

router.get('/:dbName/:type', async (req, res) => {
    try {
        console.log("The server call '/products/id' was successfully received");

        // Parse the DBName & desired product type 
        const dbName = req.params.dbName;
        const RequestedType = req.params.type;

        //Grab the collection matching the desired name
        let collection = await db.collection(dbName);

        let result = {};
        //If the type is 'all', get everything from that collection
        if (RequestedType === 'All') {
            result = await collection.find({}).toArray();
        }
        else {
            //Else, grab only the products matching the type
            result = await collection.find({ Type: RequestedType }).toArray();
        }

        if (!result || result.length === 0) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to get a singular project by ID

router.get('/getProductByID/:dbName/:productID', async (req, res) => {
    console.log("The server call 'getProductsByID' was successfully received");
    try {
        // Parse the DBName & desired product type 
        const dbName = req.params.dbName;
        const productID = req.params.productID;

        //Grab the collection matching the desired name
        let collection = await db.collection(dbName);

        let result = await collection.findOne({ _id: new ObjectId(productID) });

        console.log(`The resquest being returned is: ${JSON.stringify(result)}`)

        if (!result || result.length === 0) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update a user's cart

router.patch('/updateCart/:id', async (req, res) => {
    let firebaseId = req.params.id;
    console.log(`The request to update user ${firebaseId}'s cart was recieved`);
    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            Cart: req.body
        }
    }; let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update a user's orders

router.patch('/updateOrders/:id', async (req, res) => {
    let firebaseId = req.params.id;
    console.log(`The request to update user ${firebaseId}'s orders was recieved`);
    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            Orders: req.body
        }
    };
    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//-> Route to update a user's wishlist

router.patch('/updateWishlist/:id', async (req, res) => {
    let firebaseId = req.params.id;
    console.log(`The request to update user ${firebaseId}'s WL was recieved`);

    const query = { Firebase: firebaseId };
    const updates = {
        $set: {
            'Wishlist.wishlistItems': req.body
        }
    };

    let collection = await db.collection("Test");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Export the router to use it in other parts of your application
export default router;
