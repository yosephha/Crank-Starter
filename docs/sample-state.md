```js
{
  user: {
    id: 1,
    username: "..."
  },

  errors: {
    signup: [],
    login: [],
    create: [],
    update: [],
    input: []
  }

  projects: {
    1: {
      id: 1,
      title: "....",
      website: "...",
      image_url: "....",        
      description: "....",
      end_date: "....",
      funding_goal: "....",
      details: "...."
      creator_id: 2,
      category_id: 1
    },

    2: {
      id: 1,
      title: "....",
      website: "...",
      image_url: "....",        
      description: "....",
      end_date: "....",
      funding_goal: "....",
      details: "...."
      creator_id: 3,
      category_id: 5
      rewards: {
        1:{
          receiver_id: 5
          title: "....",        
          amount: "....",      
          description: "...."   
        }
        2:{
          receiver_id: 5
          title: "....",        
          amount: "....",      
          description: "...."   
        }
      }
    }
  }
}
```
