Feature: Bit manipulation

	Scenario: 11010101010101 is 255
	Given an API consumer is about to ask for the translation of 11010101010101 to a number
	When the API consumer asks for the translation
	Then the API consumer should receive 255