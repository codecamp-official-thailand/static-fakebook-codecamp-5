import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { Row, Col } from "antd";

function PostList() {
  const ownerName = "Nuttachat Kulthammanit";
  const ownerPicture =
    "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-1/cp0/c0.0.40.40a/p40x40/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEYlVBHsRFEbq4NZ0oBnzCivfkHy8Or-D69-QfLw6v4Pv5jxDuZ6xkmQTm2LlLC0NbT_Lul-opFcW7eFar9xQMg&_nc_ohc=8E3UiSB564IAX8jEPyr&_nc_ht=scontent.fbkk22-4.fna&oh=e4b79feeb1c3f76e02bd4d3156bd1030&oe=5EB806FA";

  const postsList = [
    {
      id: 1,
      isMine: false,
      author: {
        picture:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/90010296_4042329475777028_7980017221281775616_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_eui2=AeGuyihledHEGmp2CNGVeiyKeZRr9iOXpzl5lGv2I5enOeXvjzF3FtuaxVp59h-cXxtjHapK4tnFEkVevJdMi68u&_nc_ohc=plWQRUNQQoYAX-5HFxT&_nc_ht=scontent.fbkk22-2.fna&oh=cc0993fdca4711924bed7d0dd645f445&oe=5EB8AA75",
        name: "Apiwut Kittiparkun",
      },
      dateTime: {
        partial: "18 ชั่วโมงที่แล้ว",
        full: "Saturday, 4 April 2020 at 22:27",
      },
      caption: `Code from Home\nเขียนโค้ดอยู่บ้าน ช่วยชาติสู้ COVID-19`,
      postPicture:
        "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/91021446_4069749806368328_6436434652596011008_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeEL_4nlVniz6PnMheqXoj6-45XjVIOzQc3jleNUg7NBzTXTEnjKboiD6TwsSaUsaUGAbG-SFAZ2LKQcA3t-w4cI&_nc_ohc=T1zSyEClJz4AX8pTbtF&_nc_ht=scontent.fbkk22-3.fna&oh=adaaa8fdb4af6d517dbdbeb902db848e&oe=5EB82A78",
      commentsList: [],
    },
    {
      id: 2,
      isMine: true,
      author: {
        picture:
          "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-1/cp0/c0.0.40.40a/p40x40/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEYlVBHsRFEbq4NZ0oBnzCivfkHy8Or-D69-QfLw6v4Pv5jxDuZ6xkmQTm2LlLC0NbT_Lul-opFcW7eFar9xQMg&_nc_ohc=8E3UiSB564IAX8jEPyr&_nc_ht=scontent.fbkk22-4.fna&oh=e4b79feeb1c3f76e02bd4d3156bd1030&oe=5EB806FA",
        name: "Nuttachai Kulthammanit",
      },
      dateTime: {
        partial: "20 ชั่วโมงที่แล้ว",
        full: "Saturday, 5 April 2020 at 22:27",
      },
      caption: `Hello It's me`,
      postPicture:
        "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/91021446_4069749806368328_6436434652596011008_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeEL_4nlVniz6PnMheqXoj6-45XjVIOzQc3jleNUg7NBzTXTEnjKboiD6TwsSaUsaUGAbG-SFAZ2LKQcA3t-w4cI&_nc_ohc=T1zSyEClJz4AX8pTbtF&_nc_ht=scontent.fbkk22-3.fna&oh=adaaa8fdb4af6d517dbdbeb902db848e&oe=5EB82A78",
      commentsList: [
        {
          id: 1,
          writer: {
            name: "Pawit Tobtab",
            picture:
              "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/cp0/p74x74/37607892_2080615848616589_5579153437943136256_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeFndojpEEXmM6PIYC-5oD7DYUid7irTWB9hSJ3uKtNYHwIa8TOSSSxYWket8f__E_BkxRcTGO83pwy4KA6JCd-Y&_nc_ohc=pmvvdy7roMYAX93gwxK&_nc_ht=scontent.fbkk22-3.fna&oh=cb40e3f2dd663c5f15359ba198b101cd&oe=5EB8CECE",
          },
          content: "This is the coding from home.",
        },
      ],
    },
    {
      id: 3,
      isMine: false,
      author: {
        picture:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/90010296_4042329475777028_7980017221281775616_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_eui2=AeGuyihledHEGmp2CNGVeiyKeZRr9iOXpzl5lGv2I5enOeXvjzF3FtuaxVp59h-cXxtjHapK4tnFEkVevJdMi68u&_nc_ohc=plWQRUNQQoYAX-5HFxT&_nc_ht=scontent.fbkk22-2.fna&oh=cc0993fdca4711924bed7d0dd645f445&oe=5EB8AA75",
        name: "Apiwut Kittiparkun",
      },
      dateTime: {
        partial: "21 ชั่วโมงที่แล้ว",
        full: "Saturday, 5 April 2020 at 31:27",
      },
      caption: `Hello From the other side`,
      postPicture:
        "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/91021446_4069749806368328_6436434652596011008_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeEL_4nlVniz6PnMheqXoj6-45XjVIOzQc3jleNUg7NBzTXTEnjKboiD6TwsSaUsaUGAbG-SFAZ2LKQcA3t-w4cI&_nc_ohc=T1zSyEClJz4AX8pTbtF&_nc_ht=scontent.fbkk22-3.fna&oh=adaaa8fdb4af6d517dbdbeb902db848e&oe=5EB82A78",
      commentsList: [
        {
          id: 1,
          writer: {
            name: "Pawit Tobtab",
            picture:
              "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/cp0/p74x74/37607892_2080615848616589_5579153437943136256_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_eui2=AeFndojpEEXmM6PIYC-5oD7DYUid7irTWB9hSJ3uKtNYHwIa8TOSSSxYWket8f__E_BkxRcTGO83pwy4KA6JCd-Y&_nc_ohc=pmvvdy7roMYAX93gwxK&_nc_ht=scontent.fbkk22-3.fna&oh=cb40e3f2dd663c5f15359ba198b101cd&oe=5EB8CECE",
          },
          content: "This is the coding from home.",
        },
        {
          id: 2,
          writer: {
            name: "Nattawut Supakorn",
            picture:
              "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/cp0/p74x74/55564273_1100669830136257_2977309224083652608_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_eui2=AeGxIuifdeMph6tI7tGW9cdrV8XwnTVj771XxfCdNWPvvcV2yM2V6_YYg_bwMvNM2pvaBlAh59gR4JjCf-4jYwDN&_nc_ohc=vFdtu0rxgcwAX93fqsf&_nc_ht=scontent.fbkk22-2.fna&oh=50479f3aa2efe83e5ac61c3b4d50f8ec&oe=5EB7F6FC",
          },
          content: "My name is Mumu.",
        },
      ],
    },
    {
      id: 4,
      isMine: true,
      author: {
        picture:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/p160x160/26991875_10156086856453156_5001396601173252145_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeHgvz5RK-kcT8HiDG-E8QHLFjfy1EloTPwWN_LUSWhM_BwFsZ8lfkDHwLvuRXnGCY0xiqWrbDujHnRhby9V9RWJ&_nc_ohc=m4OcKcSVsTMAX9AHgdx&_nc_ht=scontent.fbkk22-2.fna&_nc_tp=6&oh=d4226147d7eda33a4f426918774e6242&oe=5EB8173E",
        name: "Xeus Teerapat Prommarak",
      },
      dateTime: {
        partial: "5 วันที่แล้ว",
        full: "Sunday, 21 May 2025 at 11:13",
      },
      caption: `The first time men's haircut experience OMG!`,
      postPicture:
        "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/p960x960/93140128_3150762018276697_2303692682297344000_o.jpg?_nc_cat=100&_nc_sid=110474&_nc_eui2=AeEGtlL-rZJ9ziOCX6Ttf9uqP96oqk9autc_3qiqT1q615-fnhtXdTExY-KHvLFaeZQhMdAyz2ilGE48fct9lvNl&_nc_ohc=eGMLkS_JtMkAX-dfinh&_nc_ht=scontent.fbkk22-1.fna&_nc_tp=6&oh=33ea111f0a856bc3b2762127a52f073d&oe=5EBA39EA",
      commentsList: [
        {
          id: 1,
          writer: {
            name: "Chawintee Tobtab",
            picture:
              "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/p160x160/19420865_791449284365660_7055092580396247504_n.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_eui2=AeFqNhkVubk2XotRH2vTv_yG6nHl4tXeKPrqceXi1d4o-utMMVW0RWWFcq6tWY79qP5fFNNwFLCIK1VRhal322mg&_nc_ohc=OXT02pzyolsAX_mvsla&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=6&oh=f7395bbcba2db7461419d08f50c89750&oe=5EB83032",
          },
          content: "หล่อมากเลยครับ",
        },
      ],
    },
  ];

  return (
    <Row style={{ paddingTop: "12px" }} justify="center">
      <Col>
        <Row>
          <CreatePost
            ownerName={ownerName.split(" ")[0]}
            ownerPicture={ownerPicture}
          />
        </Row>
        {postsList.map((post) => (
          <Row key={post.id}>
            <Post
              isMine={post.isMine}
              author={post.author}
              dateTime={post.dateTime}
              caption={post.caption}
              postPicture={post.postPicture}
              ownerPicture={ownerPicture}
              commentsList={post.commentsList}
            />
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default PostList;
