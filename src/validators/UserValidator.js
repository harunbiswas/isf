import User from '@/models/User';
import { check, validationResult } from 'express-validator';

// Define validation rules for user inputs
export const userValidationRules = () => [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name should be at least 3 characters long'),
  check('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .custom(async (value, { req }) => {
      const user = await User.find({email: value}); 
  
      if (user.length>0) {
        throw new Error('Email already in use');
      }
      // Otherwise, return true to indicate successful validation
      return true;
    }),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min: 6})
    .withMessage('Password should more than 6')
];


// Validation rules
export const loginValidationRules = () => {
  return [
    check('email')
      .isEmail()
      .withMessage('Please provide a valid email address'),
    check('password')
      .notEmpty()
      .withMessage('Password is required'),
  ];
};


// Middleware function to handle validation errors
export const validate = (req) => {
  const errors = validationResult(req);

  const mappedErrors = errors.mapped()
  
 
  if (Object.keys(mappedErrors).length>0) {
    return {
      isValid: false,
      errors: mappedErrors
    };
  }
  return { isValid: true };
};
