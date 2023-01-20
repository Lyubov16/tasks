export const Item = ({ text, isDone }) => `<li class="item">
            <div>
                <input
                type="checkbox"
                ${isDone ? 'checked' : ''}>
                <span>${text}</span>
            </div>
            <button class ="btn_remove" type="button">x</button>
        </li>`