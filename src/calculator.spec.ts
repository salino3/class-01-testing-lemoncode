import * as calculator from './calculator.js';
import * as business from './business/calculator.business.js';

describe('Calculator specs', () => {

  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {

      // Arrange
      const a = 2;
      const b = 2;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toEqual(4);
      expect({ id: 1 }).toStrictEqual({ id: 1 });
    });


     it('should call isLowerThanFive when passing A equals 2 and B equals 2', () => {
       // Arrange
       const a = 2;
       const b = 2;


       // Spy
      //  const isLowerThanFive = jest.fn();

      // Stub
      const isLowerThanFive = jest.spyOn(business, 'isLowerThanFive');

       // Act
       const result = calculator.add(a, b);

       // Assert
       expect(result).toEqual(4);
       expect(isLowerThanFive).toHaveBeenCalled();
       expect(isLowerThanFive).toHaveBeenCalledWith(4);
     });
  });

  describe('multiply', () => {
    it('multuiply spec', () => {

    });
  });

});








