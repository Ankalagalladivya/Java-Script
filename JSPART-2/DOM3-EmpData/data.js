let employees=[
    {id:101,name:'Rahul',sal:45000,gender:"Male"},
    {id:102,name:'Sonai',sal:55000,gender:"Female"},
    {id:103,name:'Priyanka',sal:65000, gender:"Female"},
    {id:104,name:'Modi Ji',sal:75000,gender:"Male"}
    
    ]
    function display_Data(){
    
        let rows=""
        for(emp of employees){
            if(emp.gender !="Female"){
                rows = rows + ` <tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr> `
            }
            
        }
        document.getElementById('abc').innerHTML = rows
        //document.getElementById('abc').innerHTML = "GM"
    }