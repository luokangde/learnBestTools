/**
* home index.js
*/

import React, {Component} from 'react'
import {
	View, 
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	StyleSheet
} 
from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles'
import ViewUtils from '../../expand/ViewUtils'

export default class Index extends Component {
	constructor(props) {
        super(props)
        this.state = {
            screenProps: this.props.screenProps
        }
    } 
	static navigationOptions = ({ navigation, screenProps }) => ({
	    title: '我的',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor != '#999999' ? screenProps.themeColor : tintColor}} 
	    	source={require('../../res/images/ic_my.png')} />
	    ),
	    headerStyle:{
            backgroundColor: screenProps.themeColor
        }
  	})

	onClick(tab) {

	}	

	getItem(tag, icon, text, desc, expandableIco) {
        return ViewUtils.getSettingItem( () => this.onClick(tag), icon, text, this.state.screenProps.styles.tabBarSelectedIcon, desc, expandableIco)
    }

	render() {
    	return (
    		<View style={GlobalStyles.listView_container}>
    			<ScrollView >
    				{/*logo*/}
    				<TouchableHighlight
                        onPress= {() => this.onClick('my info')}>
                        <View style={[styles.item, {height: 80}]}>
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <Image source={require('../../res/images/ic_trending.png')}
                                       style={[{width: 40, height: 40, marginRight: 10}, this.state.screenProps.styles.tabBarSelectedIcon]}/>
                                <Text>冬天里的一把火</Text>
                            </View>
                            <Image source={require('../../res/images/ic_tiaozhuan.png')}
                                   style={[{
                                       opacity: 1,
                                       marginRight: 10,
                                       height: 22,
                                       width: 22,
                                       alignSelf: 'center',
                                   }, this.state.screenProps.styles.tabBarSelectedIcon]}/>
                        </View>
                    </TouchableHighlight>
                    <View style={GlobalStyles.line} />

                    <TouchableHighlight>
	                    <View style={[styles.item, {height: 50}]}>
	                    	 <View style={{alignItems: 'center', flexDirection: 'row'}}>
									状态栏
	                    	 </View>
	                    </View>
                    </TouchableHighlight>
                    <View style={GlobalStyles.line} />
                    
				
					{/* 我的学习 */}
                    <Text style={styles.groupTitle}>我的学习</Text>
                    <View style={GlobalStyles.line} />
					{this.getItem('MORE_MENU.Custom_Language', require('./img/ic_custom_language.png'), '消息中心')}
					<View style={GlobalStyles.line} />
                    {this.getItem('MORE_MENU.Sort_Language', require('../../res/images/ic_favorite.png'), '我的收藏')}
					<View style={GlobalStyles.line} />
					{this.getItem('MORE_MENU.Sort_Language', require('../../res/images/ic_favorite.png'), '我的课堂')}
					<View style={GlobalStyles.line} />
					{this.getItem('MORE_MENU.Sort_Language', require('../../res/images/ic_favorite.png'), '学习记录')}
					
		
					{/* 系统相关 */}
					<Text style={styles.groupTitle}>系统相关</Text>
					<View style={GlobalStyles.line} />
					{this.getItem('MORE_MENU.Custom_Language', require('./img/ic_custom_language.png'), '积分换书', '0元好书在这里')}
					<View style={GlobalStyles.line} />
					<View style={GlobalStyles.line} />
                    {this.getItem('MORE_MENU.Sort_Language', require('../../res/images/ic_favorite.png'), '帮助')}
					<View style={GlobalStyles.line} />
					{this.getItem('MORE_MENU.Sort_Language', require('../../res/images/ic_favorite.png'), '设置')}
					<View style={[{marginBottom: 60}]}/>
    			</ScrollView>
    		</View>
    	)
  	}

}	


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 10, 
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    groupTitle: {
        // fontWeight:'500',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray'

    },
})