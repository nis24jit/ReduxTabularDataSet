import expect from 'expect';
import { addGrid} from '../../client/actions/actionCreators.js';

describe('Action Creators', () => {



  describe('addGrid',()=> {

    it('should create an action to add a new row to user table', () => {


      const id="4";
      const userName="Robert5";
      const postTitle="My new car";
      const views=1120;
      const likes=52;
      const createdAt="2014-09-20";
      const isActiveUser=false;
      const currentId=4;

      const expected = {
        type: 'ADD_ROW',
        userName,
        postTitle,
        views,
        likes,
        createdAt,
        isActiveUser,
        currentId
      };

      const actual = addGrid(userName, postTitle,views,likes,createdAt,isActiveUser,currentId);
      expect(actual).toEqual(expected);
    });

  });



})
