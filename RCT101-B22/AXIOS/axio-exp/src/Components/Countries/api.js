import axios from "axios";

const getCountries = (params={page:1, limit:10}) => {
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`,{
        params:{
            page: params.page,
            limit: params.limit,
            sort:params.sort,
            order: params.order
        }
    });
};

export default getCountries;