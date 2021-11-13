function showImage(){
		var img = document.getElementsByTagName("img")[0];
		var dict = {false: "none", true:"block"};
		img.style.display = dict[document.getElementById("check").checked];
		

		// var body = document.body,
    // html = document.getElementById("content");

		// 	var height = Math.max( body.scrollHeight, body.offsetHeight, 
    //                    html.clientHeight, html.scrollHeight, html.offsetHeight );
		// 	var width = Math.max( body.scrollWidth, body.offsetWidth, 
    //                    html.clientWidth, html.scrollWidth, html.offsetWidth );

		// if (width > height){
		// 	img.style.width = "30vw";
		// 	img.style.height = "30vw";
		// } else{
		// 	img.style.width = "30vh";
		// 	img.style.height = "30vh";
		// }
		// var h1 = document.getElementById("content").clientHeight;
		// console.log(((h1 + (height-h1)/2 )/height )* 100);
		// img.style.top = (93+ "%");
		

		
	}

function getRandomInt(min, max) {
	
	

				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
			}

			var notes = ["דו", "סול", "רה", "לה", "מי", "סי", "פה דיאז", "דו דיאז", "פה","סי במול","מי במול","לה במול","רה במול","סול במול", "דו במול"];
			var scales = ["מז'ור", "מינור טבעי", "מינור הרמוני", "מינור מלודי"];
			var order = [0,7,2,9,4,11,6,1,5,10,3,8,1,6,11];
			var noteToNum = { "דו": 0, "סול": 7, "רה": 2, "לה": 9, "מי": 4, "סי": 11, "פה דיאז": 6, "דו דיאז": 1, "פה": 5, "סי במול": 10, "מי במול": 3, "לה במול": 8, "רה במול": 1, "סול במול": 6, "דו במול": 11 };

			function solutionMaker(n){return ([n, (n+2)%12, (n+4)%12, (n+5)%12, (n+7)%12, (n+9)%12, (n+11)%12])}

			function solutionShifter(n){
				var major = solutionMaker((n+3)%12);
				return [major[5], major[6], major[0], major[1], major[2], major[3], major[4]]
			}

		 
			function check(){
				
				for (var i = 0; i<8; i++){
					var sol = document.getElementById('note'+(i+1)).value - 1;
					if (solution[i] != sol){
						alert("תשובה לא נכונה, נסו שנית");
						return;
					}
				}
				alert("תשובה נכונה! כל הכבוד");
			}
			function changeNum(){
				let randomNum = getRandomInt(0,15);
				let note = notes[randomNum];
				let noteNum = noteToNum[note];
				let scaleNum = getRandomInt(0,4);
				let scale = scales[scaleNum];
				document.getElementById("randomNumber").innerHTML = note + " " + scale;
				if (scaleNum == 0){
					 window.solution = solutionMaker(noteNum);
				} else {
					 window.solution = solutionShifter(noteNum)
					if (scaleNum != 1){
					 	solution[6] ++;
						 solution[6] = solution[6]%12;
						if (scaleNum == 3){
								solution[5] ++;
								solution[5] = solution[5]%12;
						}
					}
				}	
				solution.push(noteNum);

				document.getElementById("notes").innerHTML = '<div class="custom-select" style=""> <select id="note1"> <option value="0">תו 1</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note2"> <option value="0">תו 2</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note3"> <option value="0">תו 3</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note4"> <option value="0">תו 4</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note5"> <option value="0">תו 5</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note6"> <option value="0">תו 6</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note7"> <option value="0">תו 7</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div> <div class="custom-select" > <select id="note8"> <option value="0">תו 8</option> <option value="1">דו / סי דיאז</option> <option value="2">דו דיאז / רה במול</option> <option value="3">רה</option> <option value="4">רה דיאז / מי במול</option> <option value="5">מי / פה במול</option> <option value="6">פה / מי דיאז</option> <option value="7">פה דיאז / סול במול</option> <option value="8">סול</option> <option value="9">סול דיאז / לה במול</option> <option value="10">לה</option> <option value="11">לה דיאז / סי במול</option> <option value="12">סי / דו במול</option> </select> </div>'
			}
			changeNum();