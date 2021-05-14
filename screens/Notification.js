import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import { COLORS, FONTS, images, icons } from '../constants'

const Notification = () => {
    const showCommentNotification = () => {
        return(
            <View style={{flexDirection : 'row',marginVertical : 10}}>
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
                    <View style={{...styles.username_card, width : "80%"}}>
                        <Text style={{...FONTS.body5_medium,lineHeight : 15, color : COLORS.gray}} ><Text style={{...FONTS.h4,lineHeight : 15, color : COLORS.black}} >Emma Stone</Text> has commented on your pic</Text>
                        <Text  style={{...FONTS.body5_medium, fontSize : 12, color: COLORS.black, lineHeight : 20}} >EHey nice to see your Post 😇😎 </Text>
                    </View>
                </View>
        )
    }
    const requestTitle = () => {
        return(
            <View style={{flexDirection : 'row',justifyContent:'space-between'}}>
                <Text style={{...FONTS.body1_medium, fontSize : 18}}>Requests</Text>
                <Text style={{...FONTS.body5_bold,marginTop : 6, fontSize : 14, color : COLORS.black}}>see more </Text>
                </View>
        )
    }

    const showrequest = () => {
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
                    <View style={{...styles.username_card , width : "70%"}}>
                        <Text style={{...FONTS.body5_medium,lineHeight : 15, color : COLORS.gray}} ><Text style={{...FONTS.h4,lineHeight : 15, color : COLORS.black, width : "80%"}} >Emma Stone</Text> has request to join dasd asdasd asdasda </Text>
                        <Text  style={{...FONTS.body5_medium, fontSize : 12, color: COLORS.gray, lineHeight : 20}} >Emma Stone</Text>
                    </View>
                    <View style={{backgroundColor : COLORS.black, alignContent : 'center',justifyContent : 'center',borderRadius : 5,height : 30}}>
                        <Text style={{color : COLORS.white , ...FONTS.body4,paddingHorizontal : 15, }}>Check</Text>
                    </View>
                </View>
            </View>
        )
    }

    const showNotificationTitle = () => {
        return(
            <View style={{borderBottomColor : '#C0C0C0', borderBottomWidth : 1, paddingBottom : 15}}>
                <Text style={{...FONTS.body1_medium,  marginTop : 60}}>Notification</Text>
            </View>
        )
    }

    const requestComponents = () => {
        return(
            <View style={{marginTop : 10,borderBottomColor : '#C0C0C0', borderBottomWidth : 1, paddingBottom : 15}}>
                {requestTitle()}
                <Text style={{...FONTS.body4, color : COLORS.gray, lineHeight : 11,fontSize : 10}}>Request can send by scanning QR code only</Text>
                {showrequest()}
            </View>
        )
    }

    const otherNotificationComponents = () => {
        return(
            <View>
                <Text style={{...FONTS.body1_medium,  marginTop : 10, fontSize : 18}}>Other</Text>
                {showCommentNotification()}
                {showCommentNotification()}
                {showCommentNotification()}
            </View>
        )
    }
    return (
        <View style={{marginHorizontal : 20}}>
            {showNotificationTitle()}        
            {requestComponents()}
            {otherNotificationComponents()}
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    username_card : {
        flexDirection : 'column',
        paddingHorizontal : 10,
        paddingVertical : 5,
        alignSelf: "auto",
    }
})
