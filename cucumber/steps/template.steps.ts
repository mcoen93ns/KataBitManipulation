// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { app } from "../../src/api";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test("11010101010101 is 255", ({ given, when, then }) => {
    let binaryNumber: string;
    let response: number;
    given(
      "an API consumer is about to ask for the translation of 11010101010101 to a number",
      () => {
        binaryNumber = "11010101010101";
      }
    );

    when("the API consumer asks for the translation", async () => {
      const apiResponse = await request(app).post(
        `/translateBinaryToNumber?binaryNumber=${binaryNumber}`
      );

      response = apiResponse.body.response;
    });

    then("the API consumer should receive 255", () => {
      expect(response).toBe(255);
    });
  });
});
