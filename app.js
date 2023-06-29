const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json()); // json body 받기설정

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * 입력/수정/삭제(N건)
 * @param
 * @return
 */
app.post("/save", function (req, res) {
  console.log("param:", req.body.modifiedRows);
  /*  
    modifiedRows: {
        createdRows: [ {...},{...} ...  ],
        updatedRows: [ {...},{...} ...  ],
        deletedRows: [ {...},{...} ...  ]
    }
  */
  let sqlErrMsg = [];

  // 입력
  req.body.modifiedRows.createdRows?.forEach(function (row) {
    let FEEDBACK = row.FEEDBACK;
    //let sql = `INSERT INTO NJ_BOARD(BOARD_ID, TITLE, CONTENT, USER_ID, CREATE_DATE, IMG_URL) VALUES('T3L4', '${TITLE}', '${CONTENT}','${USER_ID}', ${"NOW()"}, '${IMG_URL}')`;
    //dbconn.query(sql, function (err, result) {
    //  if (err) {
    //    sqlErrMsg.push({ sqlMessage: err.sqlMessage, sql: err.sql });
    //  }
    // });
  });

  // 모든 DML 처리후, 결과리턴을 위한 dummy select ... 더 좋은 방법은 ?
  dbconn.query(`SELECT 1`, (error, rows) => {
    res.json(JSON.stringify({ resMsg: sqlErrMsg.length === 0 ? "저장성공" : "에러발생", sqlErrMsg }));
  });
});

const server = app.listen(port, "0.0.0.0", () => {
  var host = server.address().address; // typescript 에서 에러발생 주석
  var port = server.address().port;
  console.log("lighthappyj app listening at http://%s:%s", host, port);
});
