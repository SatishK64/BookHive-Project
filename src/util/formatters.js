export const formatBookData = (data) => {
    if (!data) return null;
    
    return {
      Title: data[0],
      Genre: data[1],
      Author: data[2],
      Pages: data[3],
      'Cover URL': data[4],
      Description: data[5],
      Owners: Object.keys(data[6]).length
    };
  };