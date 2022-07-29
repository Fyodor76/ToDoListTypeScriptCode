import "../index.css"

interface switchedLanguages {
    switchedLanguage:boolean,
    setSwitchedLanguage:(switchedLanguage:boolean) => void
}


export let BlockRules = (props:switchedLanguages) => {

    return (
        <div className="container__listRules">
            <div className={props.switchedLanguage ? "english" : "english active"}><h2>What can you do in this TO DO LIST?</h2>
                <ul>
                    <li>First of all you can write down all your plans and thoughts. It will help you nothing to
                        forget!
                    </li>
                    <li>If you want to make amendments in your TO DO LIST just click two times on the text and the
                        special field
                        will appear.
                    </li>
                    <li>If you want to change the sequence of your plans, this TO DO LIST lets you move elements.
                        Thus, you can put your plans on any position.
                    </li>
                    <li>If you want to delete something, the red cross will help you. Click it and chosen element will
                        disappear
                    </li>
                    <li>By the way, you can cross out elements. You just need to click the element. It will help you to
                        separate completed plans from uncompleted ones.
                    </li>
                </ul>
            </div>
            <div  className={props.switchedLanguage ? "russian active" : "russian"}><h2>Что вы можете сделать с помощью данного ТУ ДУ ЛИСТА?</h2>
                <ul>
                    <li> Во-первых, вы можете выписать все ваши планы и мысли. Это поможет вам ничего не забыть!
                    </li>
                    <li> Если вы хотите внести исправления в ваш ТУ ДУ ЛИСТ просто нажмите два раза
                        на текст и появится специальное поле.
                    </li>
                    <li> Если вы хотите изменить последовательность ваших планов,
                        данный ТУ ДУ ЛИСТ позволит вам двигать элементы. Таким образом, вы можете
                        передвинуть план на любую позицию.
                    </li>
                    <li> Если вы захотите удалить что-то, красный крест поможет вам в этом. Нажмите на него и выбранный
                        элемент исчезнет.
                    </li>
                    <li> Помимо этого, вы можете зачеркивать элементы. Вам просто нужно кликнуть
                        на элемент. Это поможет вам разделить выполненные планы от невыполненных.
                    </li>
                </ul>
            </div>
        </div>
    )
}