var cnt = 0;
//새로운 div를 만드는 함수
function createDiv(e, v) {
    //입력된 키가 Enter면 실행
    if(e.keyCode == 13 && v != ""){
        //새로운 Div 엘리먼트를 생성
        const newDiv = document.createElement('div');
        //새로운 Div에 중복되지않는 새로운 id를 주기위해 new에 if문이 끝날 때마다 증가하는 cnt숫자를 붙임 new0 new1 new2
        var newId = "new" + cnt.toString();
        //새로운 Div의 속성 id를 위에서 만든 문자열로 부여
        newDiv.setAttribute("id", newId);

        //새로 만든 Div에 스타일 부여하기
        //newDiv.style.backgroundColor='aliceblue';
        //newDiv.style.width='20%';
        //newDiv.style.display='flex'; //자식 요소들을 수평으로 정렬
        //newDiv.style.justifyContent='space-between'; //flex-start, flex-end, center, space-around, space-between, space-evenly
        //짧게하려면 cssText를 이용 cssText='스타일 입력';
        newDiv.style.cssText='background-Color: aliceblue; width: 20%; display: flex; justify-Content: space-between;';
        newDiv.style.margin="auto";
        newDiv.style.width="40%";
        newDiv.style.padding="2%";
        newDiv.style.backgroundColor="green";
        newDiv.style.fontWeight="bold";
        newDiv.style.fontSize="18px";


        //자식 input에 부모 div와 다른 id를 주기위해 div의 id에 input이라는 문자열을 붙여줌
        newId = newId + "input";
        //새로운 input엘리먼트를 생성
        const newInput = document.createElement('input');

        //새로 만든 input엘리먼트에 속성을 부여
        newInput.setAttribute("type", "button");
        newInput.setAttribute("value", "완료");
        newInput.setAttribute("onclick", "moveDiv(this)");
        newInput.setAttribute("id", newId);

        //div에 Text를 주기위해 TextNode를 생성 안의 내용은 함수가 실행될 때 들어온 매개변수 v(value)
        const newText = document.createTextNode(v);
        //새로만든 newDiv에 위에서 설정한 input과 Text를 자식으로 추가 <div>text<input></input></div>
        newDiv.appendChild(newText);
        newDiv.appendChild(newInput);
        //세팅이 끝난 div를 menu라는 id를 가진 div의 자식으로 추가하여 화면에 보이게 함
        document.getElementById("box").appendChild(newDiv);
        //텍스트를 입력하는 부분의 value를 공백으로 만들어 엔터를 치면 입력창이 비워지게 함
        document.getElementById('todoInput').value="";
        //id중복이 되지않도록 cnt를 증가
        cnt += 1;
    }
}
//div의 위치를 움직이는 함수
function moveDiv(e){
    //움직일 div의 id를 저장
    const targetDiv = document.getElementById(e.id.slice(0,-5));
    //움직일 div의 자식인 input의 id를 저장
    const input = document.getElementById(e.id);
    //div가 옮겨가며 버튼의 완료를 삭제로 바꿈
    input.setAttribute("value", "삭제");
    //삭제라 적힌 버튼을 눌렀을 때 div가 삭제되도록 removeDiv를 실행
    input.setAttribute("onclick", "removeDiv(this)");
    //수정한 div를 menu2의 자식으로 옮김
    document.getElementById('box2').appendChild(targetDiv);
}
//div를 삭제하는 함수
function removeDiv(e){
    //div의 자식인 input의 id를 저장
    const inputId = e.id;
    //삭제할 div의 id를 저장
    const divId = inputId.slice(0,-5);

    //삭제할 div의 id를 이용해 가져옴 document.getElementById(divId).remove();
    const targetDiv = document.getElementById(divId);
    //해당 div를 삭제
    targetDiv.remove();
    //위의 2줄은  document.getElementById(divId).remove();와 같음
}