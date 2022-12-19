const Productmodel = require("../models/project");


const getallproducts =async( req,res)=>{
   
    
    const queryobject = {};
    const {company ,name, featured,sort,select} = req.query;
    if(company)
    {
        queryobject.company = company;
    }
    if(name)
    {
        queryobject.name = name;
    }
    if(featured)
    {
        queryobject.featured = featured;
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
     let skip = (page-1)*limit;
     const apidata = Productmodel.find(queryobject);
       
     apidata.skip(skip).limit(limit);
     if(sort)
     {
        // in query user write ?sort=name,price and we have to remove "," from it
        //  query.sort(field,test)  ===> query.sort(name) --> in asc &  query.sort(-name) --> in desc
    //    let sortfix = sort.replace(","," ");
    let sortfix = sort.replace(",").join(" ");
        apidata.sort(sortfix);
     }
     if(select)
     {
        // let selectfix = select.replace(","," ");
        let selectfix = select.split(",").join(" ");
        apidata.select(selectfix);

     }
    const Products = await apidata;
    res.status(200).json({Products});
    
}
const getallproductstesting = async (req,res)=>{
    const data = await Productmodel.find({});
    res.status(200).json({data});
}

module.exports = {getallproducts , getallproductstesting}