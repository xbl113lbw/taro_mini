import React, {Component} from 'react'
import {View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import './index.scss'
import banner1 from "../../static/banner1.jpg";
import banner2 from "../../static/banner2.jpg";
import banner3 from "../../static/banner3.jpg";
import banner4 from "../../static/banner4.jpg";

import nav1 from "../../static/1.png";
import nav2 from "../../static/2.png";
import nav3 from "../../static/3.png";
import nav4 from "../../static/4.png";

import title from "../../static/title.png";
import bar from "../../static/bar.png";
import btn from "../../static/btn.png";

import card1 from "../../static/card/card1.png";
import card2 from "../../static/card/card2.png";
import card4 from "../../static/card/card4.png";
import card5 from "../../static/card/card5.png";
import card6 from "../../static/card/card6.png";
import card8 from "../../static/card/card8.png";
import card9 from "../../static/card/card9.png";
import card10 from "../../static/card/card10.png";
import card11 from "../../static/card/card11.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        {
          id: 1,
          img: banner3
        }, {
          id: 2,
          img: banner1
        },
        {
          id: 3,
          img: banner2
        },
        {
          id: 4,
          img: banner4
        },
      ],
      nav: [
        {
          text: "办借记卡",
          img: nav1,
          url: encodeURIComponent(
            "https://wap.spdb.com.cn/mspmk-web-account/OpenAcctCardListQuery.hl?ChannelCode=&ManagerNumber=&BranchNo=7701&CardNo=HDKLX00046,HDKLX00060,HDKLX00023,PRSPF00017,PRSPF00008,HDKLX00030&H5Channel=301d2163a3a5d644&ManagerID=11095528"
          )
        }, {
          text: "办信用卡",
          img: nav2,
          url: encodeURIComponent(
            "https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=ZF2914964&dataId=9d2d87cc-748c-499c-b5b0-b5d5f4f72ff9&itemcode=0000032361"
          )
        }, {
          text: "安享赢",
          img: nav3,
          url: encodeURIComponent(
            "https://wap.spdb.com.cn/mspmk-web-savingsdeposits/EnjoyNewListH5.hl?H5Channel=cfafb408ec680c38&Val=fDF8MHwyMXxQb3VMeFVuOGM2RT18fDF8fDExMDUzNDYyfHx8&ShareProType=0&from=singlemessage"
          )
        }, {
          text: "大额存单",
          img: nav4,
          url: encodeURIComponent(
            "https://wap.spdb.com.cn/mspmk-web-savingsdeposits/BigDepositImgPageH5.hl?H5Channel=cfafb408ec680c38&Val=fDF8MHw4fFBvdUx4VW44YzZFPXwyMDIwMTAwMTAyOTR8Mnx8MTEwNTM0NjJ8fHw=&ShareProType=1"
          )
        }],
      type_index: 0,
      /* 信用卡 */
      creditArr: [
        {
          type: "credit",
          title: "美丽女人信用卡",
          text1: "薇娅主题卡闪耀版",
          text2: "薇娅直播间专属活动",
          green: "持卡首年免年费",
          cardUrl: card4
        }, {
          type: "credit",
          title: "苏宁易购联名卡",
          text1: "年刷卡满6次免次年年费",
          text2: "新户首刷享1年苏宁会员",
          green: "首年免年费",
          cardUrl: card9
        }, {
          type: "credit",
          title: "喜茶联名信用卡",
          text1: "额度最高5万元",
          text2: "新户达标赠喜茶超值礼包",
          green: "免年费",
          purple: "白金卡",
          cardUrl: card10
        }, {
          type: "credit",
          title: "梦卡-汽车主题卡",
          text1: "指定类型加油消费85折",
          text2: "悦驾福利全年可省600元",
          green: "达标可免年费",
          cardUrl: card5
        }, {
          type: "credit",
          title: "VISA超凡白金卡",
          text1: "新户消费达标得野兽派",
          text2: "季度达标享里程/airpods",
          green: "免年费",
          purple: "白金卡",
          cardUrl: card2
        }],
      /* 借记卡 */
      debitArr: [
        {
          type: "debit",
          title: "QQ20周年联名卡",
          text1: "达到指定条件，获赠QQ",
          text2: "超级会员和音乐豪华绿钻",
          cardUrl: card1
        },
        {
          type: "debit",
          title: "苏宁红孩子联名卡",
          text1: "新客享¥20+¥30苏宁优惠",
          text2: "大促活动享最高立减50元",
          cardUrl: card8
        }, {
          type: "debit",
          title: "本来生活联名卡",
          text1: "可享本来生活网",
          text2: "价值250元会员权益",
          purple: "本来生活网满100减30/月",
          cardUrl: card11
        },
        {
          type: "debit",
          title: "全球通G卡",
          text1: "新客户首绑快捷支付",
          text2: "次月获10元话费",
          green: "",
          purple: "月日均资产达标得20元话费",
          cardUrl: card6
        }
      ],
      listArr: []
    };

    this.changeType = this.changeType.bind(this);
  }

  componentWillMount() {
    this.changeType();
  }

  changeType(index) {
    this.setState({
      type_index: index
    });
    switch (this.state.type_index) {
      case 0:
        this.setState({
          listArr: this.state.debitArr
        });
        break;
      case 1:
        this.setState({
          listArr: this.state.creditArr
        });
        break;
      default:
        this.setState({
          listArr: this.state.debitArr
        });
        break
    }
  }

  render() {
    return (
      <View className='wrap'>
        {/*轮播*/}
        <Swiper
          className='swiper'
          duration={500}
          interval={5000}
          indicatorDots
          autoplay
        >
          {
            this.state.banner.map((item) => {
              return <SwiperItem key={item.id}>
                <View className='swiper-item'>
                  <Image src={item.img}></Image>
                </View>
              </SwiperItem>
            })
          }
        </Swiper>
        {/*导航*/}
        <View className='nav'>
          {
            this.state.nav.map((item, index) => {
              return <View className='nav_item' key={index}>
                <Image src={item.img}></Image>
                <Text>{item.text}</Text>
              </View>
            })
          }
        </View>
        {/*好卡推荐LOGO*/}
        <Image src={title} className='title_img'></Image>
        {/*类型切换*/}
        <View className='type'>
          <View className='type_item' onclick={() => {
            this.changeType(0)
          }}
          >
            <Text>借记卡</Text>
            {
              !this.state.type_index && <Image src={bar}></Image>
            }
          </View>
          <View className='type_item' onclick={() => {
            this.changeType(1)
          }}
          >
            <Text>信用卡</Text>
            {
              this.state.type_index === 1 && <Image src={bar}></Image>
            }
          </View>
        </View>
        {/*卡片列表*/}
        <View className='lists'>
          {
            this.state.listArr.map((item, index) => {
              return <View className='list' key={index}>
                <View className='title'>
                  <Text style='font-weight: 600;'>{item.title}</Text>
                  {
                    item.green && <Text className='green'>{item.green}</Text>
                  }
                  {
                    item.purple && <Text className='purple'>{item.purple}</Text>
                  }
                </View>
                <View className='card_info'>
                  <Image src={item.cardUrl} className='card_info_bg'></Image>
                  <View className='card_info_text'>
                    <Text>{item.text1}</Text>
                    <Text>{item.text2}</Text>
                    <Image src={btn} class='card_info_text_btn'></Image>
                  </View>
                </View>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
