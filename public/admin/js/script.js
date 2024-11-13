// Button status
const buttonStatus = document.querySelectorAll("[button-status]");
const pagination = document.querySelectorAll("[button-pagination]");

if (buttonStatus.length > 0) {

    let url = new URL(window.location.href);

    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status);
            } else {
                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        })
    })
}

// End Button Status

// Form Search

const fromSearch = document.querySelector('#form-search');
if (fromSearch) {
    let url = new URL(window.location.href);
    fromSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = e.target?.elements?.keyword?.value;
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        } window.location.href = url.href;
    })

}

// End form search


// Pagination

if (pagination.length > 0) {
    let url = new URL(window.location.href);

    pagination.forEach(page => {
        page.addEventListener('click', () => {
            const pageNumber = parseInt(page.getAttribute('button-pagination'));

            // if(pageNumber)
            // {
            url.searchParams.set("page", pageNumber);
            // }else
            // {
            //     url.searchParams.delete("page");
            // }
            window.location.href = url.href;
        })
    })
}

// End Pagination


// Form Checkbox
const checkboxMulti = document.querySelector('[checkbox-multi]');
if (checkboxMulti) {
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputids = checkboxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener('click', () => {
        if (inputCheckAll.checked) {
            inputids.forEach(item => {
                item.checked = true;
            });
        } else {
            inputids.forEach(item => {
                item.checked = false;
            });
        }
    });

    inputids.forEach(input=>{
        input.addEventListener('click',()=>{
          //input.checked ? false : true
          const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
          if(countChecked == inputids.length){
            inputCheckAll.checked = true;
          }else{
            inputCheckAll.checked = false;
          }
        });
    })
}

const formChangeMulti = document.querySelector("[form-change-multi]");
if(formChangeMulti){
    formChangeMulti.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const checkboxMulti = document.querySelector('[checkbox-multi]');
        const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");
  
        if(inputsChecked.length > 0){
        let ids = [];

        const inputIds = formChangeMulti.querySelector("input[name='ids']");

        inputsChecked.forEach(input=>{
            const id = input.value; 
            ids.push(id);
        }
        )
            inputIds.value = ids.join(",");
          formChangeMulti.submit();
        }else
        {
            alert('Vui long chon it nhat 1 ban ghi');
          
        }
        
        
    })
}

// End Checkbox