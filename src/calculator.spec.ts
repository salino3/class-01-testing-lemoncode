import * as calculator from './calculator.js';
import * as business from './business/calculator.business.js';

// Mock  -- it doesn't work..
// jest.mock('./business', () => ({
//   __esModule: true,
//   ...jest.requireActual('./business')
// }));

describe('Calculator specs', () => {

  // afterEach(() => {
  //   jest.restoreAllMocks();
  // });


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
      const isLowerThan = jest.spyOn(business, 'isLowerThan')
      .mockImplementation((result) => {
        console.log(`This is the result ${result}`);
      });

       // Act
       const result = calculator.add(a, b);

       // Assert
       expect(result).toEqual(4);
       expect(isLowerThan).toHaveBeenCalled();
       expect(isLowerThan).toHaveBeenCalledWith(4, 6);
     });
  });

});


