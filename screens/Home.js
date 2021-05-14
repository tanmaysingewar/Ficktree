import React from 'react'
import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import Cards from '../component/Cards'
import { FONTS,SIZES,COLORS,images } from '../constants'

const Home = () => {
    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

    const renderNavBar = () => {
        return (
          <>
          <View  style={{flexDirection : 'row', height: 60,justifyContent:'space-between', alignItems: 'flex-end', paddingHorizontal: SIZES.padding ,paddingVertical: 5, }}>
              <View>
              <Text style={{ ...FONTS.title}} onPress={onPressTouch} >Ficktree </Text>
              </View>
              <TouchableOpacity 
                onPress={() => (navigation.push('Profile'))}
              >
            <View style={{borderColor : COLORS.black, borderWidth : 1.5, marginBottom : 8,borderRadius : 50}}>
              
              <Image 
                  source={images.profile1}
                  style={{
                      width : 24,
                      height : 24,
                      borderRadius : 50,
                      margin : 1
                  }}
              />
            </View>
            </TouchableOpacity>
            
          </View>
          </>
        )
      }

    return (<View>
                {renderNavBar()}
                <ScrollView>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </ScrollView>
    </View>
        
    )
}

export default Home

const styles = StyleSheet.create({})
