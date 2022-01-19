import { renderHook } from '@testing-library/react-hooks';
import useAPI from '../utils/useAPI';
import fetch from 'jest-fetch-mock';

const fetchUrl = 'api/mockUrl';

const creditCardResponse = {
    "creditCards" : [
        {
            "id": 2,
            "name": "Anywhere Card",
            "aprPercentage": 33.9,
            "balanceTransferOfferDurationInMonths" : 0,
            "purchaseOfferDurationInMonths" : 0,
            "creditAvailableInPound" : 300,
            "availabilityRuleId" : 2
         }
      ],
    "availabilityRules" : [
        {
            "id": 2,
            "name": "Anywhere Card Rule",
            "conditions" : []
        }
    ]
}

afterEach(() => {
    fetch.mockClear();
});
  
afterAll(() => {
    fetch.mockRestore();
});

describe('useAPI', () => {
    
    test('should return data after fetch', async () => {
  
        jest.spyOn(global, 'fetch').mockImplementation(() : Promise<any>=>
          Promise.resolve({
            json: () => Promise.resolve(creditCardResponse),
          })
        );
    
        const { result, waitForNextUpdate } = renderHook(() => useAPI(fetchUrl, 'GET', null, true));
      
        await waitForNextUpdate();
        
        const {data, error, isLoading} = result.current;
    
        expect({data, error, isLoading}).toStrictEqual({
            data: creditCardResponse,
            error: null,
            isLoading: false
        });
    });

    test('should catch error', async () => {
  
        jest.spyOn(global, 'fetch').mockImplementation(() : Promise<any>=>
          Promise.resolve({
            json: () => Promise.reject('Error occured!'),
          })
        );
    
        const { result, waitForNextUpdate } = renderHook(() => useAPI(fetchUrl, 'GET', null, true));
      
        await waitForNextUpdate();
        
        const {data, error, isLoading} = result.current;
    
        expect({data, error, isLoading}).toStrictEqual({
            data: null,
            error: 'Error occured!',
            isLoading: false
        });
    });

    it("should not fetch data if immdediate parameter is false", async () => {
        
        const { result } = renderHook(() => useAPI(fetchUrl, 'GET', null, false));
    
        const {data, error, isLoading} = result.current;

        expect(fetch).not.toHaveBeenCalled();
        expect({data, error, isLoading}).toStrictEqual({
          isLoading: false,
          data: null,
          error: null,
        });
      });
});
