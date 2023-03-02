import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./ServiceSlide.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';


const getService = () => {
    return axios.get("https://apis.myginee.com/v1/service/detail/17")
}

const responsiveSettings = [
   
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
    {
        breakpoint:  300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint:  200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint:  100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
  ];


export const ServiceSlide = () => {
     const [data, setData] = useState([])


     useEffect(()=> {
        getService().then((res)=> setData(res.data)).catch((err) => console.log(err))
     })

    //  console.log(data)

  return (
    <div className='serviceslide'>
         <div style={{width:"14%", padding:"8px"}}>
            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAM4AiQMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAwACBAUGBwj/xAA2EAABBAEDAgUBBgUEAwAAAAABAAIDEQQFEiExQQYTIlFxYRQjMoGRoRVCUtHwBzOxwWKSk//EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAuEQACAgEEAQIFBAEFAAAAAAAAAQIRAwQSITFBE1EiMmGB8BRxkaEFI7HB0fH/2gAMAwEAAhEDEQA/APkp56qmgUhAoUKgCgCgKvdQQMSTapkiAI6oC5bwgKd0ACEAEBEIRARARAOUNkQEQBQBQBQCHG0MlVQFAQdUAzdYQFO6ALkBRARCEQEVBEA4KGgqFIgIgD2tALc/lCFFSAQEQBHJQDNpq1AUPVUAKACAipCICKAiFHNQpZQpKQB5CFFOeeiGWUVIRChDbQUW8tBQBwUIaQ4eWoDM78SoIUBRARAGkBYBASkA1oUNFqQDceB+RNHDE0ukkcGtA7kqSkoq2ajFydI7uZ4SyYMR0seTFLIxu50YBHA60e68UNdGUqcaPdPQSjG1K2eVI5XuPmgVBFCjWIUsVSCj1QhfnaoBZtUE5QAQBCAvXsoUs2NzujUsUW8l/sligRBAhwCpRuLkuwsqHIjAL43hwB6GljJHfFx9zpjm4SUl4PQ5viyKfEkbiYsrJ5Glu57gWsvrXv8Asvnw0TUrk+D6M9cnCork8k5oHZfQs+W0LpaJRcRcLO42oBDa6qpmWqLFaMixW5QDSRtQCDyVQGlAEROJ+UsqiaYsMu6qWaUTdBgWOi5uRtQNRxGNbaXZvYkDyY0JSOS1pbw4EfK6I5M7vhjRWaxmSRzPcyKFm9+z8Rs0AF59VneGKa7Z6dHplnyU3whvjTw7j6RjQZWJJKWSSeW5krgaNEgggfRcdHqpZpOMvB31uihgipwZ5uBhksN7dV7aPBdFMmN0TqcOOypm7BjReY9ZnKjpjhuZ0jj7Y7Xn3cnseOkc+ZtPXeLPJNckLPSbXQ5UKaFBRYsNdEFFNnKtihkTeRYUIkbotvAAWWdEzWA+MDc2h9VKLuNmDjnJcd8waAL4TYT1DNqjXYvLXEt+q2oHN5bOb9rKbSb2feD/AKZ6Y7BIfE7za5+8JXT4LOL9VK7PmErMrwnr2Q3B2veH+UY3iw8GqFLy6nFHJ8MvB79HlcUpx7Zr8Q6Zq+uwNkycjHi8oF7caOM7Qa/qvkrx4XjwcRXfk9mf1c3zPo8hpUJdK+Nw56E+y+huo+d6blwN1TFc0tvke6brL6e3sXp8Q380Fxys9WnirOhlFnlgBcI3Z68jSRxcmr49164nz8nZNhLeq6HEXE23UpYo6seCXxbq/ZSxRl+z/ebapUhplwSyIu2oCmkQ+dquPE4Ehz6pCS6Pa+JNFZj6ZLLHRLWomjCTZ4fHzZoHhzAFqzTgaM7JdmRjzA1tc01as5baOb5YUFH6b1DxnoGG1zTqmM6QD8LHhx/Zaxw3Mzkm0uFZ8e8Q4WuazrL9TwdNyGwySB0LnNqwOhP6LOWpZNp2wqWLDb8cnS8QZ+raZpQflaLLA+Ruwzh1xg1XzfyvFk0eyVuXB7sOr9WPETwWnTuinPp3F/VdWuBGVGnPjyclh8uF+1nUhhIHyaWYzivIljnPlIwRRzNO4c/CSkmWEZRLSyOLbKJIspMwzH/ldUeaQ+M+haM0yYzfvR8rLKj1eGIvspBPNLBujlyxAZQI5FraZlxN2UYvsg+FUYao88zJdjZTZ4urDdrRhs6Go+KZcrFdCS71CiClEUjz5yCeyu0u9gOQ+lTNlfPegs+vf6YRw5DX5smx04l+8AHIbX919LHNTg3XxM+RqYzWojufwo+lz6rpeHOx0uVCC70uANkH4Xz8rceWfawQeaow5vo8n/qBrem/wbIxo54pTKOjTa8M8u+SjHk+1h/x844p5Zx2pJ8nyjw9jtyczkgdmlY1U9kTxadb5WfSItOgkwMdkZAcxvqp1c918KWWW5s+5ipKvY4Gs6DDBJLPFwHEkC16sGpcqizjkwLmSPCzitwHY0vsRPkyMj2kroji0MipUcDGANN2oSzZFmkDbfCUN1FzlMPq4VojkNkglycYPEkbGuHpBs3/AGXJ5VF1R3WCU4brOI8CIOjmG17TyF6E0+UeKUXF0zE8guNdFowVVBEBEB6HHbkYso2SPafdji0/sud10dtt9o6JyZGRUAeeSQebXN8neDcejDqD8nKbtkle5vYErEIxj0j0Z9VnzR2zk2henySYXqYDY5UywU+Dz424cnTZ4qyoXkjqfovLLQwkeuOtnErmeJMrPZteT+SmPRQxuzUtXKao5hjLl6rOFFHQAAkkBVSJtECJ8szYoWl0jjQaO66JnFo3DRM8mixn/wBG/wB1NyLsI7S3Y2RHHmSxRl3JYJAXAe9e3FJb8IbI3yzdqel4UeFvic/zAAd26wfhWLd8mckY1wcXH1MQReTMHO2ekEHqk8O52i49Ttjtfgw5MzsmZ8ruC49AusVtVHnnPfJy9zVjYDHwCR1ku6c9FbIkYZ4zFK5h6tVRllGNLzTRfwlimN+zS/0pZdrPUGWMmwz91w5PVwKlyL7JQsR55JWWbRN4cKWTaSBsaeylsqigtYAeAoaUTr6HpX8QnjdkPazF3feneA+voO655JNLjsOcY/MbsvTtKbq0QxCwY8b3bo8mYN80Dhp9VH6mvakcqgmnb+nJmOSLdtdHpJvB2nQRRPhzdjJOjoMYOFGud13XTuvEtdK+jpOO76HPHh7GL42M1eQPkdta1+G4En/2XT9a6bcf7MRxW0rPKeKNFmh1wxyebkxxCNrnRRE2Op99vU9Svo4M8Z40+v3Z5c2GUMjbTf7I2yYmlYBbhzY0rvMaK8ubc1pNEc2KIuj8FTBJzdyfC+hrKoRSSi+fz3PNZOkOeZW4jHOmhdUsZddA9CPfuuyl58HL0t3y+DkkPjcWvaWkdiuhxquDTi5eTENkPqBPALbpRpGlfgPkbnF88gs8kDqVL9jWz3GFzI4wGbQ0/qpyatIz72/1uQzx7ne/kWDsjO7qozSRNqxZ0SIDShou1491DVhfNt2Na0PkkdtjaTwT7n6D/PpYw3M45s2ziPZsx9SxsXfDK9s4PEjntGwj4pV6dPlX9n+WeNSp3LlmefJ/hzhPpvGmSjypoo3WGk9aB/Y/kVhQ3vbP5lym/wA/lHoWXbyunw6/Puc7TNQfp2UWRybInH0uZY2HsRXb3C9OSCny1yc4ZPT+C7X5yegxfE+ovb5c+pZEO91RTCTeGkcbXgjp3BHY9+V5/wBFhdPadf1uSCq+jbh+Jc/Rs/MZq8czsmfy3F7HNvYB6SOKINnlZ1f+PUWo4+K+/wDZ2/x2uxZcbnkbcn7JL+V7lvEfi6DU48AebmNZBkiVzJAOAOeCDZ9v091z0+nyQvdXT6+p0z5capr3T/g8oZ449roHuZJLJuDmkt2ts8Ed7FH6WvoK7PnxdV9T0LsDGzG7spoLvwscOoRnuliUvmOLn6RPjHYXAs5o8Dhc3OnyZ/TSa4ZxX7mup3X2XZUzwyTi6YGv2npf0SjNl98fsheDoHIdRba5NHaLCHErLOiYS4rNG7ASUoAspQsWZnx5JLQCWQkcjpYu/wDhdIdHim28jOv4U0GHVoJpcp5axgdI6UDcYoowS4gdyTTfzXfHLG3KM/p/2fPzalwzKEVdK3+ftbv38GnxhhfY45o3FgkniY98cVCOMg8BoHfk2e68MYtyhlS+Bt15dPy/+D2vVYppRi7l5fj9l9//AA8aQa3nnoL+V7aJdcDY3yNiLmuI8t7Ximjr0u+3widO0WSUlTOnqGVLl4mn5GQdxYHQHnktBsD9z+quTN6jSa6RnBpFp4uUX8z/AI4MuozNkDfLMhYwU3eRupc4o7znuRkynbZfR/K0d+vutJcGZdnvNJ1KGENtlkdC7lcXCR9bFKNKx2sMhzcYmm7h6hXZVK1TLk5Vo8TqM3nUHta18Z28BILa6PBnn6iTfaOcux5SIDa0+srkzujQw8LLOiLWVKKRDRYKFLsxPOme5wIc/G3R1/M5p2kfpRW48L7njfzyR3PCObJiQTacPKjGTFNG2Z44t2xzQfblpF/ULhkw7svq3Xj36/28HaGHBsk5q3LjjvpU/wBkZ/Gefj5gdk4s++OZ1FhaQWOG0EX3FNFUvSsOKG14/uvY8OVv1Y4qpRv7pKrPHrodAhztjmgkB1WL6+yhR8sw+xQQAch7n388BSkat7UhmPE3Id948RtawucSeTXYLMm4rg9Glwxyybm6jFW/t4X7mSQh73OAIB91tI883Fu4qj0unEOhjeT/ACBabpHrwqw5WpOb6W8NHBJXCTs7SnwefypRNO947rcbrk8GRpydCT1W0cyqEN5FSFcj0DmhQ0i4ChotSFCEKjt+E3QjVo3ZD4WeU10kTp3bWbxXpJ9j/wBdlicXKNXRzyWmpxQzUZsHNdNqLYxiCR5Lo4/U0H6V0/P3XXDp00o7keHJrWnSg7/Pv/TPO6uZchgmmjGHjsBbjQuJ3P59uvy48fNr0+jshb49vqc45lPI9vxN9+0fpf477OTRq+y5HpJQHLuAgNONhS5UGRM1pLYIy9xv/O1/ou+PTznGUl0lZxyaiEJKLfL6Ekvhc9juDy1wXGcNr2vs9GHM1FtdSVFKJ6eyGaOvgz1hMF9LFfmuU34PZgf+mK1CN8sYeB06hZhKmTNFuNnLXc8YxkT3i2tJHustpG1Bst9ml/p/dTci+nI1N5NlQ6D29FDSLhQqLdlDQEBYFANbqbsHHfDtGydw3StHrZQ/lPX8kUZfNGTTXsx6kE9uWCkn7qx2NDp+Tos88oBzo37rcLMrO3J545XHJLL6vPKZ7MUNM8L2xSa+hg0jEbmZsuOyISSOiJjHexya+tLvLJsjbPF6O/KtngTqGNHASJGuZK2tzT1+PkJGT6NZ4QS3VTPSaPo+gS4EMkfiEwTPcDWVBsiLx7E0OL9yvpYp4klFS5PzWq/WqbksVx+l2eZ1TFMeXkffsl2ylu4H8X1XkyP42fT09ywxdUYjujux+JtHj/PosHf4o9nQ04VADXIJXOfZ6MHyGtcztYs48RdvLG7velbZnbH2LbB2FKGgeWPZAZCNshC7HmHNPCjKWBQpcKGg0gB3QWYtScfuweR1pbiccj5RsYRsbXArhZo6WWjcYp2TxHZKw217eCFHFNUzUZOL3Lsplg5cjpZT63GzQrn3pIpRVITnLI7kNbK9uA3BJDsdrnOALeQT15WXFOW41DI4x2oRHiwghxFkdui0ZSQM3HEsTdtNLLKsXTM5Y7lfsIwJa3QnqCTas1zZjDLijfa5nosloLISoWwWgswyuuYrsea+RzKIQpcdVAWChS4KFIaQGHUePLP1WonKZr9lDoS1AC0BLQEDqShYbsEe/ClF74MOOA3OcOo5pblyjlj4lR0LC5noJaABKACA5r3feErqeZj438IUYHqFsuHBDVlw5QWQlKKZc/mJpPYqxOc+h8Lt0bT9Fk2uhlJZaAVbBUoQFoA2pRTHECMpzv8AycFp9HKPZr3LNHWyb0oWHd9VKLZNw90oWc5x9RXQ4DGHhCl7QFgUKXDqUKmXDkKIzTcPPuERmfRfFd9y1Ro1HoeCoaIUBUqkKkoCbkIZx6HRg/i3GyqZqhxPKhoFoAEoCWhTGfxFbOIxh4UKi9oUNoAgoUsHIVFcn/ZcohLomKfugj7JHodahstfCFBaEJaAoVSCJj95H8qoy+0NtQoLQAJQEtAZD+IrRyLtKFLWoUNoUIKAsChS0htjh9FAxeKfQflGSHQ+1DYdyFJaAloAWhDPkH1s+VUYkxh4Q0AlCAtAC0Ag9Vo5hCAsOqFLIUlqAu0oVEd+EqFKYx4KrMxHqGwbkBLQBtAQoUzz/wC434VRzkNtQ2VKEAUIBUCVTAWoC6FIgChUEFQFgVCi4TRd8qkiNtQ0FCktAS0BEAif8Y+FUc5DAeFDYUBUoAIQUtGAhAWCFCgIhUFAFQFI+rkCGKGg2gIgDaAFoBM34x8LSMSGXwsmw9kBVCEVB//Z' alt='' height={150} width={150} />
            <h4>Photography</h4>
            <Link to={"/photography"}><button>View All</button></Link>
         </div>

        <div className="slidecate">
        <Slide  slidesToShow={5} responsive={responsiveSettings} slidesToScroll={1}>
           { data.map((item) => {
                return (
                    <div className='singleSlideService' key={item.id}>
                    <p style={{fontWeight:"bold"}}>{item.title}</p>
                    <div className='product-image'>
                        <img src={item.image} alt=''/>
                    </div>
                        {/* <p>⭐ 4.1 (11k)</p>
                        <p style={{width:"70%"}}>🛄 241 Bookings this month in Bhopal</p>
                        <h5>₹{item.value}/per square feet</h5> */}
                        <button>Show More</button>
                    </div>
                )
            })}
        </Slide>
        </div>
    </div>
  )
}
