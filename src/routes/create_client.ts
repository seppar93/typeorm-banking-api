import express from "express";
import { Client } from "src/entities/Client";

const router = express.Router();

router.post("/api/client", async (req, res) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;

//   client is extended from BaseEntity for all CRUD operations
  const client = Client.create({
    fist_name: firstName,
    last_name: lastName,
    email,
    card_number: cardNumber,
    balance
  })
//   saves the object to the DB
  await client.save()

  return res.send("testing");
});

export { router as CreateClientRouter };
