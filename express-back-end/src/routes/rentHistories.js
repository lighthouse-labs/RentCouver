import { Router } from "express";
const router = Router();
import { RentHistory, Property, User } from "../db/models";

router.get("/rentHistories", async (req, res) => {
  const rentHistories = await RentHistory.findAll({
    // attributes: {
    //   exclude: ["is_requested", "is_decline"],
    // },
    include: [
      {
        model: Property,
        attributes: {
          exclude: [
            "title",
            "square_feet",
            "description",
            "property_type",
            "number_of_bathrooms",
            "number_of_bedrooms",
            "listed_start_date",
            "cost_of_month",
            "pets_allowed",
          ],
        },
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                "password",
                "job_title",
                "annual_income",
                "profile_picture_url",
                "other_household_occupants",
                "is_landlord",
              ],
            },
          },
        ],
      },
    ],
  });
  res.send(rentHistories);
});

export default router;
