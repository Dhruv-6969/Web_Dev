marks = [85, 97, 44, 37, 76, 60];

sum = 0;

for(i = 0; i<marks.length; i++)
{
    sum = sum + marks[i];
}

avgmarks = sum/marks.length;

console.log(avgmarks);