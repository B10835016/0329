// STEP 1: mount 1 time
let video; // 宣告影像
let classifier;
let txtcontent='';
function preload(){
  classifier = ml5.imageClassifier('./model/'+'model.json');// load model data
}
function setup() {
  createCanvas(640, 480); // 畫面大小
  video = createCapture(VIDEO); //擷取畫面
  video.hide();  //隱藏畫面
  classifyVideo();
  // 定義字體
  textSize(30);
  textAlign(CENTER, CENTER);
}
// STEP 2: classify , and update repeatedly
function classifyVideo(){
  classifier.classify(video, getResult); // 開始判斷並取得結果
} 
function draw() {
  background(220); // 背景顏色
  image(video, 0, 0); // 放置video內容
  
  // STEP 3: some lable on canvas
  fill(200, 80, 80, 200);
  text(txtcontent, width/2, height-30);  
  
  if(txtcontent == "REC"){
    circle(265,450,30);
    rect(30, 20, 100, 8);
    rect(30, 28, 8, 60);
    rect(30, 460, 100, 8);
    rect(30, 400, 8, 60);
    rect(510, 20, 100, 8);
    rect(602, 28, 8, 60);
    rect(510, 460, 100, 8);
    rect(602, 400, 8, 60);
    
    rect(220, 170, 50, 6);
    rect(220, 176, 6, 30);
    rect(220, 330, 50, 6);
    rect(220, 300, 6, 30);
    rect(350, 170, 50, 6);
    rect(394, 176, 6, 30);
    rect(350, 330, 50, 6);
    rect(394, 300, 6, 30);
    noStroke();
  }
  
}
// STEP 4: load classification!
function getResult(error, results){
  if (error){ // 若有問題列印結果
    console.error(error);
    return;
  }
  //若沒問題 執行
  console.log(results[0]); //第一個物件是AI判斷最接近的class
  txtcontent = results[0].label; // 取得txtcontent
  classifyVideo();
}