import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';

const FirstImgDetails = () => {
  const navigation = useNavigation();

  const backto_forthScreen = () => {
    navigation.navigate(ROUTES.FORTH_SCREEN);
  };

  return (
    <View>
      <ScrollView>
        {/* showsVerticalScrollIndicator={true} */}
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            size={30}
            color="black"
            onPress={backto_forthScreen}
          />
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 35,
            borderRadius: 20,
            marginHorizontal: 35,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <ImageBackground
            style={{height: 400, width: 340, resizeMode: 'center'}}
            source={require('../../assets/Ktm.jpg')}></ImageBackground>
        </TouchableOpacity>

        <SafeAreaView
          style={{marginHorizontal: 28, alignItems: 'center', marginTop: 10}}>
          <ReadMore numberOfLines={4} readMoreText="See More">
            {
              "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city's mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuiltBharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past. is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past."
            }
          </ReadMore>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export {FirstImgDetails};

const SecondImgDetails = () => {
  const navigation = useNavigation();

  const backto_forthScreen = () => {
    navigation.navigate(ROUTES.FORTH_SCREEN);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          onPress={backto_forthScreen}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 35,
          borderRadius: 20,
          marginHorizontal: 35,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{height: 400, width: 340, resizeMode: 'center'}}
          source={require('../../assets/Mt.everest.jpg')}></ImageBackground>
      </TouchableOpacity>
      <SafeAreaView
        style={{marginHorizontal: 28, alignItems: 'center', marginTop: 10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {
            "Mount Everest, the world's tallest peak standing at a staggering 29,032 feet (8,849 meters) above sea level, is a bucket-list destination for adventurous travelers and avid mountaineers alike. Located in the Himalayas on the border between Nepal and Tibet, this iconic mountain offers a breathtaking and challenging experience. Visitors flock to Everest Base Camp to witness the awe-inspiring beauty of the towering peak, experience the rich local culture of the Sherpa people, and embark on treks that provide a taste of the extreme conditions faced by climbers who attempt to conquer this majestic giant."
          }
        </ReadMore>
      </SafeAreaView>
    </View>
  );
};

export {SecondImgDetails};

const ThirdImgDetails = () => {
  const navigation = useNavigation();

  const backto_forthScreen = () => {
    navigation.navigate(ROUTES.FORTH_SCREEN);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          onPress={backto_forthScreen}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 35,
          borderRadius: 20,
          marginHorizontal: 35,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{height: 400, width: 340, resizeMode: 'center'}}
          source={require('../../assets/Pokhara.jpg')}></ImageBackground>
      </TouchableOpacity>
      <SafeAreaView
        style={{marginHorizontal: 28, alignItems: 'center', marginTop: 10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {
            "Pokhara, nestled in the breathtaking Himalayan foothills of Nepal, is a haven for tourists seeking natural beauty and adventure. With its serene lakes, including the iconic Phewa Lake reflecting the stunning Annapurna and Machapuchare mountain ranges, Pokhara offers a tranquil escape. The city serves as a gateway to some of Nepal's most renowned trekking destinations, such as the Annapurna Circuit and Ghorepani Poon Hill, making it a paradise for hikers and adventure enthusiasts. "
          }
        </ReadMore>
      </SafeAreaView>
    </View>
  );
};

export {ThirdImgDetails};

const ForthImgDetails = () => {
  const navigation = useNavigation();

  const backto_forthScreen = () => {
    navigation.navigate(ROUTES.FORTH_SCREEN);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          onPress={backto_forthScreen}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 35,
          borderRadius: 20,
          marginHorizontal: 35,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{height: 400, width: 340, resizeMode: 'center'}}
          source={require('../../assets/Nagarkot.jpg')}></ImageBackground>
      </TouchableOpacity>
      <SafeAreaView
        style={{marginHorizontal: 28, alignItems: 'center', marginTop: 10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {
            'Nagarkot, a charming hill station nestled in the Kathmandu Valley of Nepal, offers a picturesque escape for tourists seeking tranquility and stunning natural beauty. Perched at an altitude of approximately 2,195 meters, this serene destination boasts breathtaking panoramic views of the Himalayan mountain range, including iconic peaks like Mount Everest, making it a must-visit spot for sunrise and sunset enthusiasts.'
          }
        </ReadMore>
      </SafeAreaView>
    </View>
  );
};

export {ForthImgDetails};

const FifthImgDetails = () => {
  const navigation = useNavigation();

  const backto_forthScreen = () => {
    navigation.navigate(ROUTES.FORTH_SCREEN);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          onPress={backto_forthScreen}
        />
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 35,
          borderRadius: 20,
          marginHorizontal: 35,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{height: 400, width: 340, resizeMode: 'center'}}
          source={require('../../assets/Bhaktapur.jpg')}></ImageBackground>
      </TouchableOpacity>
      <SafeAreaView
        style={{marginHorizontal: 28, alignItems: 'center', marginTop: 10}}>
        <ReadMore numberOfLines={4} readMoreText="See More">
          {
            "Bharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past."
          }
        </ReadMore>
      </SafeAreaView>
    </View>
  );
};

export {FifthImgDetails};
