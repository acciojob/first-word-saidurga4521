function firstWord(s) {
  let ans=""
  for(let i=0;i<s.length;i++){
    if(s[i]!=' '){
      ans=ans+s[i]
  }
  else{
    break;
  }
}
	return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
