export const PRODUCT_QUERY= `
query{
    products{
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
          pdf{
            data{
              attributes{
                __typename
              }
            }
          }
        }
      }
    }
  }
`;  

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!){
    products(filters: {slug: {eq: $slug}}){
      data{
        attributes{
          title
          description
          price
          slug
          pdf{
            data{
              attributes{
                __typename
              }
            }
          }
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`

export const GET_MEMBER_QUERY = `
  query getMember($slug: String!){
    members(filters: {slug: {eq: $slug}}){
      data{
        attributes{
          name,
          age,
          slug,
          description,
          profilepicture{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
  