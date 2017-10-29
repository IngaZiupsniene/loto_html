var ctx = document.getElementById("myChart");

Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
        {
            label: 'Top wins',
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
           
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function addData(label, data) {
    myChart.data.labels.push(label);
    console.log(label);
    myChart.data.datasets[0].data.push(data);
    myChart.data.datasets[0].backgroundColor.push('brown');
   
    myChart.data.datasets[0].borderColor.push('white');

    myChart.update();
}

function update_chart() {
            //myChart.destroy();

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText); //cia gaunam objektu masyva:
                    for (var i = 0; i <= myObj.length - 1; i++) {
                        addData(myObj[i].name, myObj[i].amount); 
                        //cia ideda duomenis is json:{username: xxx;games:xxx}
                    }
                }   
            };
            xmlhttp.open("GET", "http://localhost:8010/lototopwins", true); 
//  prie sito prirasius ?username gausi all user games (prie myobj - ikelti-myObj[i].amount)
// ?top_wins gausi top 10 winners(prie myobj - ikelti-myObj[i].total_wins)
// ?top_games gausi top 10 gamers(prie myobj - ikelti-myObj[i].games)
//?stats - ikelti-myObj[i].total_wins)  ikelti-myObj[i].games)
xmlhttp.send();

}

update_chart();

// function Top_wins(){
//  var xmlhttp = new XMLHttpRequest();
//             xmlhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     var myObj = JSON.parse(this.responseText); //cia gaunam objektu masyva:
//                     for (var i = 0; i <= myObj.length - 1; i++) {
//                         addData(myObj[i].name, myObj[i].amount); 
//                         //cia ideda duomenis is json:{username: xxx;games:xxx}
//                     }
//                 }   
//             };
//             xmlhttp.open("GET", "http://localhost:8010/lototopwins", true); 
// //  prie sito prirasius ?username gausi all user games (prie myobj - ikelti-myObj[i].amount)
// // ?top_wins gausi top 10 winners(prie myobj - ikelti-myObj[i].total_wins)
// // ?top_games gausi top 10 gamers(prie myobj - ikelti-myObj[i].games)
// //?stats - ikelti-myObj[i].total_wins)  ikelti-myObj[i].games)
// xmlhttp.send();

// }

// function Top_players(){
// var xmlhttp = new XMLHttpRequest();
//             xmlhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     var myObj = JSON.parse(this.responseText); //cia gaunam objektu masyva:
//                     for (var i = 0; i <= myObj.length - 1; i++) {
//                         addData(myObj[i].name, myObj[i].amount); 
//                         //cia ideda duomenis is json:{username: xxx;games:xxx}
//                     }
//                 }   
//             };
//             xmlhttp.open("GET", "http://localhost:8010/lotousers", true); 
// //  prie sito prirasius ?username gausi all user games (prie myobj - ikelti-myObj[i].amount)
// // ?top_wins gausi top 10 winners(prie myobj - ikelti-myObj[i].total_wins)
// // ?top_games gausi top 10 gamers(prie myobj - ikelti-myObj[i].games)
// //?stats - ikelti-myObj[i].total_wins)  ikelti-myObj[i].games)
// xmlhttp.send();

// }


// function All_games(){
//  var xmlhttp = new XMLHttpRequest();
//             xmlhttp.onreadystatechange = function() {
//                 if (this.readyState == 4 && this.status == 200) {
//                     var myObj = JSON.parse(this.responseText); //cia gaunam objektu masyva:
//                     for (var i = 0; i <= myObj.length - 1; i++) {
//                         addData(myObj[i].name, myObj[i].amount); 
//                         //cia ideda duomenis is json:{username: xxx;games:xxx}
//                     }
//                 }   
//             };
//             xmlhttp.open("GET", "http://localhost:8010/lotousers", true); 
// //  prie sito prirasius ?username gausi all user games (prie myobj - ikelti-myObj[i].amount)
// // ?top_wins gausi top 10 winners(prie myobj - ikelti-myObj[i].total_wins)
// // ?top_games gausi top 10 gamers(prie myobj - ikelti-myObj[i].games)
// //?stats - ikelti-myObj[i].total_wins)  ikelti-myObj[i].games)
// xmlhttp.send();

// }
