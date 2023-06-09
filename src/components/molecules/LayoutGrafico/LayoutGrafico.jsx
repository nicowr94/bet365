import React from 'react'
import "./LayoutGrafico.css";

export default function LayoutGrafico({info}) {

    const icon = 
    <svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox='0 0 17 17'><g fill='#757575'><path d='M8.5 0a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm0 1a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z'/><path d='M10.098 11.833l-.108.485c-.322.14-.58.248-.772.322a1.86 1.86 0 0 1-.669.11c-.39 0-.694-.106-.91-.316a1.07 1.07 0 0 1-.326-.801c0-.126.008-.255.025-.386.016-.131.042-.28.078-.445l.403-1.576c.036-.151.066-.294.09-.43.026-.134.037-.257.037-.369 0-.201-.037-.342-.112-.42-.075-.08-.219-.12-.431-.12-.105 0-.212.019-.32.054-.11.036-.204.07-.283.103l.108-.486c.264-.119.516-.22.758-.305.241-.085.47-.127.685-.127.388 0 .687.104.897.31.21.208.315.476.315.808 0 .068-.007.189-.021.361a2.65 2.65 0 0 1-.081.475l-.402 1.57a4.575 4.575 0 0 0-.127.8c0 .208.042.35.126.426.085.075.232.113.44.113.097 0 .208-.02.331-.057.124-.037.214-.07.269-.1zm.102-6.59a.964.964 0 0 1-.28.699.907.907 0 0 1-.677.289.917.917 0 0 1-.68-.29.96.96 0 0 1-.283-.698c0-.274.095-.507.284-.702a.913.913 0 0 1 .68-.291c.263 0 .488.097.675.291.188.195.281.428.281.702z'/></g></svg>

    return (
        <div className='m-LayoutGrafico-content'>
            <div className='m-LayoutGrafico-header'>
                <div className='m-LayoutGrafico-header-column '>
                    <div className='m-LayoutGrafico-header-column--title'>{info?.title}{icon}</div>
                    <div className='m-LayoutGrafico-header-column--desc'>{info?.desc}</div>
                </div>

                <div className='m-LayoutGrafico-header-column m-LayoutGrafico-header-column--right'>
                    <div className='m-LayoutGrafico-header-column--title'>{info?.monto}</div>
                    <div className='m-LayoutGrafico-header-column--desc'>{info?.monto_desc}</div>
                </div>
            </div>

            <div className='m-LayoutGrafico-body'>
                <div className='m-LayoutGrafico-body-column '>
                    <div className='m-LayoutGrafico-body-column--title'>{info?.body_title1}</div>
                    <div className='m-LayoutGrafico-body-column--desc'>{info?.body_title1_val}</div>
                </div>
                {
                    info.body_title2
                    ? (
                        <div className='m-LayoutGrafico-body-column'>
                            <div className='m-LayoutGrafico-body-column--title'>{info?.body_title2}</div>
                            <div className='m-LayoutGrafico-body-column--desc'>{info?.body_title2_val}</div>
                        </div>
                    )
                    : null
                }

            </div>
        </div>
    )
}
