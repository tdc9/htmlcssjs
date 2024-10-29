//try 
//catch
//throw
//finally


var x=11;
try {
    x.toPrecision(59999)
    }catch (err){
        throw err.name
    } finally{
        console.log("Range Exceeded")
    }