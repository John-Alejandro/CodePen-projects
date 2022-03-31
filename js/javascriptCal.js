"use strict"

const projectName = "javascript-calculator";

const isOperator = /[x/+-]/,
    endsWithOperator = /[x+-/]$/,
    endswithNegativeSign = /\d[x+-]{1}-$/,
    clearStyle = { background: "#ac3939" },
    operatorStyle = { background: "#666666" },
    equalStyle = {
        background: "#004466",
        position: "absolute",
        height: 130,
        bottom: 5
    };