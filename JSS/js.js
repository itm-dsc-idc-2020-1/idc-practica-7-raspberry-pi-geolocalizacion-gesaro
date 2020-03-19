//update coordenadas set latitud=19.721838, longitud=-101.185858 where id="ras"
//update coordenadas set latitud=19.721803, longitud=-101.185790 where id="ras"
//update coordenadas set latitud=19.721849, longitud=-101.185817 where id="ras"

function drawSalon(json){

	var canvas=document.getElementById('miCanvas');
	if(canvas&&canvas.getContext){
		var ctx=canvas.getContext("2d");
		if (ctx) {
			

			//Conversion de datos que se reciben
	        a=parseFloat(json[0].lat);
	        b=parseFloat(json[0].long);

	        c=parseFloat(json[1].lat);
	        d=parseFloat(json[1].long);

	        e=parseFloat(json[2].lat);
	        f=parseFloat(json[2].long);
	        
	        g=parseFloat(json[3].lat);
	        h=parseFloat(json[3].long);

	        i=parseFloat(json[4].lat);
	        j=parseFloat(json[4].long);


	        // Regla de 3 para calcular el primer punto
          	latitud_superior = 19.721915;
          	y1 = ((latitud_superior - a)*500)/0.000148;
          	longitud_superior = -101.185915;
          	x1 = ((longitud_superior - b)*1000)/(-0.000179);
          	//document.write("<br />x1: "+x1+" y1: "+y1);


          	// Dibujar un círculo en el primer punto
          	ctx.beginPath();
          	ctx.arc(x1,y1,5, 0, 2*Math.PI,true);
          	ctx.stroke();

          	// Regla de 3 para calcular el segundo punto
          	y2 = ((latitud_superior - c)*500)/0.000148;
          	x2 = ((longitud_superior - d)*1000)/(-0.000179);
          	//document.write("<br />x2: "+x2+" y2: "+y2);

          	// Dibujar un círculo en el segundo punto
          	ctx.beginPath();
          	ctx.arc(x2,y2,5, 0, 2*Math.PI,true);
          	ctx.stroke();



          	// Regla de 3 para calcular el tercer punto
          	y3 = ((latitud_superior - e)*500)/0.000148;
          	x3 = ((longitud_superior - f)*1000)/(-0.000179);
          	//document.write("<br />x3: "+x3+" y3: "+y3);

          	// Dibujar un círculo en el segundo punto
          	ctx.beginPath();
          	ctx.arc(x3,y3,5, 0, 2*Math.PI,true);
          	ctx.stroke();




          	// Regla de 3 para calcular el tercer punto
          	y4 = ((latitud_superior - g)*500)/0.000148;
          	x4 = ((longitud_superior - h)*1000)/(-0.000179);
          	//document.write("<br />x4: "+x4+" y4: "+y4);

          	// Dibujar un círculo en el segundo punto
          	ctx.beginPath();
          	ctx.arc(x4,y4,5, 0, 2*Math.PI,true);
          	ctx.stroke();

          	// Dibujar linea
          	ctx.beginPath();
          	ctx.moveTo(x1, y1);
          	ctx.lineTo(x2, y2);
          	ctx.lineTo(x3, y3);
          	ctx.lineTo(x4, y4);
          	ctx.lineTo(x1, y1);
          	ctx.stroke();


          	// Regla de 3 para calcular el tercer punto
          	y5 = ((latitud_superior - i)*500)/0.000148;
          	x5 = ((longitud_superior - j)*1000)/(-0.000179);
          	//document.write("<br />x5: "+x5+" y5: "+y5);

          	// Dibujar un círculo en el segundo punto
          	ctx.beginPath();
          	ctx.arc(x5,y5,5, 0, 2*Math.PI,true);
          	ctx.stroke();



			//drawLineas();


			/*for (i=0;json.length; i++){
				alert(json[i].lat + ' _ '+json[i].long);
			}*/
			/*for (i=0;i<4; i++){
				alert(json[i].lat + ' _ '+json[i].long);
			}*/

		} 
		else {
			alert("Error al crear el contexto");
		}
	}

	function drawLineas(){
		//Definicion de colores
		ctx.fillStyle = "black";

		//Inicio de Trayectoria
		ctx.beginPath();
		ctx.moveTo(28, 20);

		//Dibujar lineas
		ctx.lineTo(34, 60);
		ctx.lineTo(123, 78);
		ctx.lineTo(123, 20);
		ctx.lineTo(28, 20);

		//Definiendo un color
		ctx.fillStyle = "#0000ff";

		//Rellenando la figura
		ctx.fill();
	}
}