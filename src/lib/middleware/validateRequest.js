const validateRequest = (requestObj) => {
  const secretKey = process.env.AUTH_KEY;

  const { key } = requestObj;

  console.log(key);

  if(key !== secretKey){
    throw new Error('Forbidden');
  }

  return key === secretKey;
}

export default validateRequest;
