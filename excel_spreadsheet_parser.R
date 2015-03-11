data <- read.csv("hypocrites_spreadsheet2.csv", header=FALSE, sep= ",")
data_frame <- as.data.frame(data)
d <- data_frame[c(3:53),c(1:5)]

results = NULL
for (column in 1:ncol(d)){
  cat("[")
  for (row in 1:nrow(d)){
    results[row] <- cat("\"",as.character(d[row,column]),"\",")
  } 
  cat("]")
}