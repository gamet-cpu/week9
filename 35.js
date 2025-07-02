
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


let j = 1;
while (j <= 10) {
  if (j === 5) {
    j++;
    continue;
  }
  if (j === 8) {
    break;
  }
  console.log(j);
  j++;
}


let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);



while (true) {
  let input = prompt();
  if (input === "10") {
    break;
  }
}


for (let a = 1; a <= 10; a++) {
  console.log(a);
}


for (let i = 0;; i++) {
  if (i > 100) {
    break;
  }
}

// Задание 7
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


let password;
while (password !== "1234") {
  password = prompt();
}

for (let i = 0; i < 5; i++) {
  console.log("Итерация", i);
}


for (let i = 10; i >= 1; i--) {
  console.log(i);
}


for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
