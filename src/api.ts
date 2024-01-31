import express, { Request, Response } from "express";
import { eliminateUnsetBits } from "./template";

// Create a new express application instance
export const app: express.Application = express();

app.use(express.json());

app.get("/translateBinaryToNumber", (req: Request, res: Response) => {
  const binaryString: string = req.query.binaryNumber as string;
  const decimalNumber = eliminateUnsetBits(binaryString);

  // Send back only the decimal number in the response
  res.json({ decimalNumber });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
