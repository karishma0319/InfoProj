function likeToggle(){
	
	let likeButton = document.getElementById("like_button");
	
	
	
	if(likeButton.value=="No"){
		
		likeButton.value="Yes";
		likeButton.style.backgroundColor = "rgb(79, 79, 206)";
		likeButton.style.color = "white";
		
	}else{
		
		likeButton.value="No";
		
		likeButton.style.background = "none";
		likeButton.style.color = "inherit";
		likeButton.style.borderStyle = "solid";
	
	}
	
}


function followToggle(){
	
	let followButton = document.getElementById("follow_button");
	
	if(followButton.value=="0"){
		
		followButton.value="1";
		followButton.style.backgroundColor = "rgb(206, 79, 79)";
		followButton.style.color = "white";
		
		let yes = '<div class="following"> Following: 9</div>';
	
	
		document.getElementById("num_following").innerHTML = yes;
		
	} else {
	
		followButton.value="0";
		followButton.style.background = "none";
		followButton.style.color = "inherit";
		Button.style.borderStyle = "solid";
	
		let no = '<div class="following"> Following: 8</div>';
	
	
		document.getElementById("num_following").innerHTML = no;
	}
	
}



function WritePost(){
	let name = "Demo User";
	let text = "Hello World!";
	
	document.getElementById("FirstForm").innerHTML = '<textarea id="post1" rows="5" cols="50" placeholder="Write Post Here ✍️..."></textarea>';
	
	let html = '';
	html += `<br>
	
        <div class="AllPost">
	
            <div class="AllPost1">
                <p>
                    <strong>${name}</strong>
                </p> ${text}
            </div> <br>
           <div class = "likeButton">
                <button id="like_button" value="No" class="like" onclick="likeToggle()">👍🏼Like</button>
			</div>
			<br>
			<div class = "followButton">
                <button id="follow_button" value="0" onclick="followToggle()" class="FollowPost">❤️Follow</button>
                
            </div>
        </div>
		<br>
	`;
	document.getElementById("RecentPost").innerHTML += html;
}

 