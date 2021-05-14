import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions , TouchableWithoutFeedback , TouchableOpacity, TextInput} from 'react-native'
import { icons, images, theme, COLORS, SIZES, FONTS } from '../constants'
let backCount = 0
let backTimer
const Cards = ({onProfileClick , onPostOption}) => {
    const displayNameCard = () => {
        return(
            <View style={{flexDirection : 'row', height: 60,justifyContent:'space-between', alignItems: 'flex-end',paddingVertical: 5}}>
                <View style={{flexDirection : 'row'}}>
                    <TouchableOpacity onPress={() => onProfileClick('Emma Stone',images.profile1)}> 
                    <Image 
                    source={images.profile1}
                    style={{
                        width : 35,
                        height : 35,
                        borderRadius : 50,
                    }}
                    />
                    </TouchableOpacity> 
                    <View style={styles.username_card}>
                        <Text style={{...FONTS.h4,lineHeight : 15}} >Emma Stone</Text>
                        <Text  style={{...FONTS.body4, fontSize : 10, color: COLORS.gray, lineHeight : 15}} >Emma Stone</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => onPostOption()}>
                        <Image 
                        source={icons.more}
                        style={{
                            width : 15,
                            height : 15,
                            tintColor : COLORS.gray,
                            marginVertical : 15
                        }}
                        />
                    </TouchableOpacity>
                </View>
          </View>
        )
    }

    const post = () => {
        return(
            <View style={styles.card}>
                <TouchableWithoutFeedback
                        onPress={() => {
                            backCount++
                            if (backCount == 2) {
                                // backCount = 0
                                console.log("Clicked twice", backCount)
                            } else {
                                backTimer = setTimeout(() => {
                                backCount = 0
                                }, 350)
                            }

                        }}
                    >
                    <View style={{overflow : 'hidden', borderRadius : 10}}>
                                <Image source={images.post} style={{height : Dimensions.get('window').height / 2.3, width : "100%", alignSelf : 'center', resizeMode : 'center', backgroundColor : '#fff'}}/>        
                    </View>
              </TouchableWithoutFeedback>
          </View>
        )}
    
        const caption =() => {
            return(
                <View style={{marginBottom : 10, marginHorizontal : 5}}> 
                <Text style={{...FONTS.body5_medium,color : "#8c979A", marginTop : 10, lineHeight : 18, textAlign : "left" }} >Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
          </View>
            )
        }

    const promotions = () => {
        return(
            <View style={{ backgroundColor : "#CBF1FF" , paddingHorizontal: 10, paddingVertical : 3, borderRadius : 5}}>
              <View style={{flexDirection : 'row', justifyContent : 'space-between'}} >
                    <View style={{flexDirection : 'row'}}>
                            <Image 
                                source={images.profile1}
                                style={{
                                    width : 20,
                                    height : 20,
                                    borderRadius : 50,
                                }}
                            />
                            <View style={{paddingHorizontal : 8, justifyContent : 'center', alignItems :'center'}}>
                                <Text style={{ ...FONTS.body5_medium, color:COLORS.black, fontSize : 12}}>20% off XYZ Caffe</Text>
                            </View>
                    </View>
                <View style={{paddingHorizontal : 10, marginTop : 2}}>
                     <Image 
                        source={icons.tag_icon}
                        style={{
                            width : 18,
                            height : 18,
                            tintColor : COLORS.black
                        }}
                     />
                </View>     
              </View>
          </View>
        )
    }

    const addComment = () => {
        return(
            <View style={{flexDirection : 'row'}}>
            <View style={{width : "86%"}}>
                <View style={{backgroundColor :'#fff', borderRadius : 50, paddingHorizontal : 10 , marginVertical : 5}}>
                    <TextInput placeholder="Add Comment" style={{padding : 5, ...FONTS.body5_medium}}/>
                </View>
            </View>
            <View style={{marginTop  :10,paddingHorizontal : 10}}>
                <TouchableOpacity onPress={() => {}}> 
                    <Image 
                    source={icons.send_icon}
                    style={{
                        width : 22,
                        height : 22
                    }}
                    />
                </TouchableOpacity> 
            </View>
          </View>
        )
    }
    return (
        <View style={styles.cardContainer}>
            {displayNameCard()}
            {post()}
            {caption()}
            {promotions()}
            <Text style={{...FONTS.body5_bold , marginHorizontal :7,marginTop : 8}}>Show all Comments</Text>
            {addComment()}
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    cardContainer : {
        marginHorizontal : SIZES.padding,
        marginVertical : SIZES.padding,
        maxWidth : 601
    },
    card : {
        // paddingHorizontal : SIZES.padding,
        // paddingVertical : SIZES.padding,
        marginTop: 10,
        marginBottom : 5,
        backgroundColor : COLORS.cardColor,
        borderRadius : SIZES.radius
    },
    username_card : {
        flexDirection : 'column',
        paddingHorizontal : 10,
        paddingVertical : 5
    }
})

