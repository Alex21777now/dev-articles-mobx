import React, { Component } from "react";
import {
  Card

} from "react-bootstrap";
import { Button } from '@material-ui/core';
import { useState } from "react";
import Form from "./Form.js";
import KursVse from "./KursVse";


export default class FirstComponent_1 extends Component {



state = {
  adult: undefined,
  backdrop_path: undefined,
  genre_ids: undefined,
  id: undefined,
  original_language: undefined,
  original_title: undefined,
  overview: undefined,
  popularity: undefined,
  poster_path: undefined,
  release_date: undefined,
  title: undefined,
  video: undefined,
  vote_average: undefined,
  vote_count: undefined
  
  
}

async componentDidMount() {


const api_url1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e5548c37fdfda0975c70c0688c24955`);
const data1 = await api_url1.json();
console.log(data1);
const randomInt = Math.floor(Math.random() * 19);

this.setState({
  adult1: data1.results[randomInt].adult,
  backdrop_path1: data1.results[randomInt].backdrop_path,
  genre_ids1: data1.results[randomInt].genre_ids,
  id1: data1.results[randomInt].id,
  original_language1: data1.results[randomInt].original_language,
  original_title1: data1.results[randomInt].original_title,
  overview1: data1.results[randomInt].overview,
  popularity1: data1.results[randomInt].popularity,
  poster_path1: data1.results[randomInt].poster_path,
  release_date1: data1.results[randomInt].release_date,
  title1: data1.results[randomInt].title,
  video1: data1.results[randomInt].video,
  vote_average1: data1.results[randomInt].vote_average,
  vote_count1: data1.results[randomInt].vote_count,
  data1: data1,
  error: ""
});
console.log(this.state);  

}

  render() {
    
  
    return (
    <div className="flex-container">
 
          <div className="flex-child magenta">
    
{/*          

      <Form kursMethod1={this.gettingKurs1}

          

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1}

       />

      <>


{
  <KursVse
  

         adult1={this.state.adult1}
         backdrop_path1={this.state.backdrop_path1}
         genre_ids1={this.state.genre_ids1}
         id1={this.state.id1}
         original_language1={this.state.original_language1}
         original_title1={this.state.original_title1}
         overview1={this.state.overview1}
         popularity1={this.state.popularity1}
         poster_path1={this.state.poster_path1}
         release_date1={this.state.release_date1}
         title1={this.state.title1}
         video1={this.state.video1}
         vote_average1={this.state.vote_average1}
         vote_count1={this.state.vote_count1}
         error={this.state.error}
         data1={this.state.data1} 

   />
 }
     </>
*/}
  
  Fortune
Elon Musk claims full self driving is so advanced Tesla owners are turning it off and steering with their knees to check text messages
Amanda Gerut
Updated Thu, January 30, 2025 at 11:59 AM GMT+2·3 min read
Tesla CEO Elon Musk told investors and analysts the electric vehicle maker’s investments in autonomous vehicles and robots may have set it on a path to becoming the most valuable company in the world.

During a call with investors and analysts on Wednesday, Tesla CEO Elon Musk said the company is on course to reap immense gains in the coming years due to its development of autonomy. In fact, he said Tesla’s full self driving (FSD) feature has advanced so profoundly in its development that drivers are turning the feature off so they don’t get hit with a series of annoying beeps for removing their hands from the steering wheel.

“Right now, there is this perverse situation where people actually go to manual driving to check their text messages so the computer doesn’t yell at them,” said Musk. Drivers turn off autopilot, he claimed, and steer with their knees so they can read emails and texts. This is “significantly less safe” than if drivers could take their hands off the steering wheel, he noted. Musk commented in response to an analyst who complained that autopilot was “super boring” because he didn’t need to intervene. The analyst asked Musk if Tesla was considering offering unsupervised driving that allowed a user five seconds or so to handle their phones.

Musk’s leadership at Tesla has seen numerous investigations and recalls of the cars in recent years. In contrast, the EU’s regulatory approach is slower and FSD still isn’t permitted overseas.
Musk cautioned that Tesla is taking it slow with FSD and will roll out an unsupervised autonomous fleet in Austin, Tex. in June. He compared it to dipping a toe in the water, followed by a few toes, followed by a foot, before diving in as a safety precaution.

Musk made his comments during Tesla’s fourth quarter question-and-answer call with financial analysts after the market closed on Wednesday. It was Musk’s first exchange with analysts since President Trump’s election win in November. He avoided answering questions about his proximity to Trump, despite significant shareholder interest in the topic.

Prior to the call, the most up-voted question about Musk posed by a retail shareholder on Tesla’s online platform for Q&A was: “How is having a position in the White House going to affect the time spent with Tesla?” Runners up were variations on the same theme. Shareholders wanted to know whether Musk was dedicating enough time to Tesla, whether sales were being lost due to Musk’s political activities, and clarity on the hand gestures Musk made during President Trump’s inauguration.

The questions were not asked during the Q&A.

For the full year 2024, Tesla’s revenues were up 1% to $98 billion while its vehicle deliveries fell 1% year-over-year to 1.8 million. Operating expenses rose 18% for the year, largely because of significant spending on artificial intelligence and research and development efforts.

Musk said the investments in 2024 were critical to paving the way for manufacturing products that will feature AI and robotics. Yet, he also predicted the investment will bear fruit in the future that could see Tesla become the most valuable company in the world “by far,” said Musk.

He said critics of Tesla’s plans for an autonomous future have called him the “boy who cried wolf” in the past but now, Tesla has a “self-driving wolf.” He claimed prior versions of FSD, which he compared to a toddler who has begun to mature, have been developed more thoroughly.

This story was originally featured on Fortune.com

</div>

    </div>
    );
            }
          }
