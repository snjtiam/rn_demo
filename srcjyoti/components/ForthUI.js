import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import DestinationComponent from './Forth_imgUI/DestinationComponent';

const ForthUI = () => {
  const navigation = useNavigation();
  const data = [
    {
      imgUrl: require('../assets/Mt.everest.jpg'),
      destination: 'Mount Everest',
      country: 'MT.Everest,Nepal',
      description:
        "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city's mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuiltBharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past. is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past.",
    },
    {
      imgUrl: require('../assets/Pokhara.jpg'),
      destination: 'Gateway Annapurna',
      country: 'Pokhara,Nepal',
      description:
        "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city's mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuiltBharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past. is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past.",
    },
    {
      imgUrl: require('../assets/Nagarkot.jpg'),
      destination: '28Km from Ktm',
      country: 'Nagarkot,Nepal',
      description:
        "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city's mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuiltBharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past. is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past.",
    },
    {
      imgUrl: require('../assets/Bhaktapur.jpg'),
      destination: 'Taumadhi Square',
      country: 'Bhaktapur,Nepal',
      description:
        "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city's mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake. Durbar Square's palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are being rebuiltBharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past. is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past.",
    },
  ];

  const onPress = data => {
    navigation.navigate(ROUTES.DESTINATION_DETAIL, {...data});
  };

  return (
    <View>
      <TextInput
        placeholder="  Search your place"
        style={{
          backgroundColor: 'white',
          marginHorizontal: 25,
          marginTop: 2,
          borderRadius: 15,
        }}
      />

      <SectionTitle title={'Special for you'} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <DestinationComponent
            imgUrl={item.imgUrl}
            destination={item.destination}
            country={item.country}
            onPress={() => {
              onPress(item);
            }}
          />
        )}
      />
    </View>
  );
};

const SectionTitle = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: 'black'}}>
        {title}
      </Text>
      <Text style={{fontSize: 18, paddingTop: 5.5}}>Explore</Text>
    </View>
  );
};

const Third = () => {
  const navigation = useNavigation();

  const firstimg = () => {
    navigation.navigate(ROUTES.FirstImgDetails);
  };

  const secondimg = () => {
    navigation.navigate(ROUTES.SecondImgDetails);
  };

  const thirdimg = () => {
    navigation.navigate(ROUTES.ThirdImgDetails);
  };

  const forthimg = () => {
    navigation.navigate(ROUTES.ForthImgDetails);
  };

  const fifthimg = () => {
    navigation.navigate(ROUTES.FifthImgDetails);
  };
  return (
    <View>
      <ScrollView horizontal={true}>
        {/* ---------------using ImageBackground------------------ */}

        {/* ---------------using Image------------------ */}
        {/* <TouchableOpacity style={{ marginLeft: 15, marginHorizontal: 10, borderRadius: 20, overflow: 'hidden' }}>
          <View style={{ position: 'relative' }}>
            <Image style={{ height: 255, width: 195 }} source={require("../assets/Mt.everest.jpg")} />
            <Text style={{ position: 'absolute', color: 'white', bottom: 10, right: 10 }}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
          </View>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginHorizontal: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={secondimg}>
          <ImageBackground
            style={{height: 255, width: 195, justifyContent: 'flex-end'}}
            source={require('../assets/Mt.everest.jpg')}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: 'skyblue',
              }}>
              {' '}
              MT.Everest,Nepal
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'skyblue',
                marginBottom: 1,
              }}>
              <Ionicons
                name="location"
                size={22}
                color="white"
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Mount Everest
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginHorizontal: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={thirdimg}>
          <ImageBackground
            style={{height: 255, width: 195, justifyContent: 'flex-end'}}
            source={require('../assets/Pokhara.jpg')}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: 'skyblue',
              }}>
              {' '}
              Pokhara,Nepal
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'skyblue',
                marginBottom: 1,
              }}>
              <Ionicons
                name="location"
                size={22}
                color="white"
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Gateway Annapurna
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginHorizontal: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={forthimg}>
          <ImageBackground
            style={{height: 255, width: 195, justifyContent: 'flex-end'}}
            source={require('../assets/Nagarkot.jpg')}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: 'skyblue',
              }}>
              {' '}
              Nagarkot,Nepal
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'skyblue',
                marginBottom: 1,
              }}>
              <Ionicons
                name="location"
                size={22}
                color="white"
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                28Km from Ktm
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: 15,
            marginHorizontal: 10,
            borderRadius: 20,
            overflow: 'hidden',
          }}
          onPress={fifthimg}>
          <ImageBackground
            style={{height: 255, width: 195, justifyContent: 'flex-end'}}
            source={require('../assets/Bhaktapur.jpg')}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: 'skyblue',
              }}>
              {' '}
              Bhaktapur,Nepal
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'skyblue',
                marginBottom: 1,
              }}>
              <Ionicons
                name="location"
                size={22}
                color="white"
                style={{marginLeft: 10}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Taumadhi Square
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Forth = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 23, color: 'black'}}>
        Popular Place
      </Text>
      <Text style={{fontSize: 18, paddingTop: 5.5}}>Explore</Text>
    </View>
  );
};

const Fifth = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 30,
        paddingVertical: 3,
        borderRadius: 20,
      }}>
      <Image
        style={{
          borderRadius: 20,
          marginLeft: 12,
          marginHorizontal: 10,
          height: 118,
          width: 105,
        }}
        source={require('../assets/PhoksundoLake.jpg')}
      />
      <View style={{width: 200}}>
        <Text style={{fontSize: 19, fontWeight: '900'}}>
          Phoksundo Lake,Nepal
        </Text>
        <Text style={{fontWeight: 600, paddingVertical: 6}}>
          The journey to Shey Phoksundo Lake unfolds as a true adventure...
        </Text>
        <Text style={{fontWeight: '900', fontSize: 20, color: '#00CBFE'}}>
          $45.00
        </Text>
      </View>
    </View>
  );
};

export default ForthUI;
