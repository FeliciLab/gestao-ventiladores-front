import '@testing-library/jest-dom/extend-expect';
import {
  getAllItemsRequest,
  saveItem,
  saveNewItemRequest,
  updateItemRequest,
} from './itemService';


describe('itemService >', () => {
  it('should has method saveItem()', () => {
    expect(saveItem).toBeDefined();
  });
  it('should has method updateItemRequest()', () => {
    expect(updateItemRequest).toBeDefined();
  });
  it('should has method getAllItemsRequest()', () => {
    expect(getAllItemsRequest).toBeDefined();
  });
  it('should has method saveNewItemRequest()', () => {
    expect(saveNewItemRequest).toBeDefined();
  });
});
