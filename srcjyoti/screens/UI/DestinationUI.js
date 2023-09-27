import React from 'react';
import {View, Text, TextInput, FlatList, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import {DestinationComponent} from '../../components/UI_components/DestinationComponent';
import {SectionTitle} from '../../components/UI_components/DestinationComponent';
import {Section_Package} from '../../components/UI_components/DestinationComponent';

const DestinationUI = () => {
  const navigation = useNavigation();

  const data = [
    {
      imgUrl: require('../../assets/Mt.everest.jpg'),
      destination: 'Mount Everest',
      country: 'MT.Everest, Nepal',
      description:
        "Mount Everest, the world's tallest peak standing at a staggering 29,032 feet (8,849 meters) above sea level, is a bucket-list destination for adventurous travelers and avid mountaineers alike. Located in the Himalayas on the border between Nepal and Tibet, this iconic mountain offers a breathtaking and challenging experience. Visitors flock to Everest Base Camp to witness the awe-inspiring beauty of the towering peak, experience the rich local culture of the Sherpa people, and embark on treks that provide a taste of the extreme conditions faced by climbers who attempt to conquer this majestic giant. this iconic mountain offers a breathtaking and challenging experience. Visitors flock to Everest Base Camp to witness the awe-inspiring beauty of the towering peak, experience the rich local culture of the Sherpa people, and embark on treks that provide a taste of the extreme conditions faced by climbers who attempt to conquer this majestic giant.this iconic mountain offers a breathtaking and challenging experience. Visitors flock to Everest Base Camp to witness the awe-inspiring beauty of the towering peak, experience the rich local culture of the Sherpa people, and embark on treks that provide a taste of the extreme conditions faced by climbers who attempt to conquer this majestic giant.this iconic mountain offers a breathtaking and challenging experience. Visitors flock to Everest Base Camp to witness the awe-inspiring beauty of the towering peak, experience the rich local culture of the Sherpa people, and embark on treks that provide a taste of the extreme conditions faced by climbers who attempt to conquer this majestic giant.this iconic mountain offers a breathtaking and challenging experience.",
    },
    {
      imgUrl: require('../../assets/Pokhara.jpg'),
      destination: 'Gateway Annapurna',
      country: 'Pokhara, Nepal',
      description: "Pokhara, nestled in the breathtaking Himalayan foothills of Nepal, is a haven for tourists seeking natural beauty and adventure. With its serene lakes, including the iconic Phewa Lake reflecting the stunning Annapurna and Machapuchare mountain ranges, Pokhara offers a tranquil escape. The city serves as a gateway to some of Nepal's most renowned trekking destinations, such as the Annapurna Circuit and Ghorepani Poon Hill, making it a paradise for hikers and adventure enthusiasts.",
    },
    {
      imgUrl: require('../../assets/Nagarkot.jpg'),
      destination: '28Km from Ktm',
      country: 'Nagarkot, Nepal',
      description: 'Nagarkot, a charming hill station nestled in the Kathmandu Valley of Nepal, offers a picturesque escape for tourists seeking tranquility and stunning natural beauty. Perched at an altitude of approximately 2,195 meters, this serene destination boasts breathtaking panoramic views of the Himalayan mountain range, including iconic peaks like Mount Everest, making it a must-visit spot for sunrise and sunset enthusiasts.',
    },
    {
      imgUrl: require('../../assets/Bhaktapur.jpg'),
      destination: 'Taumadhi Square',
      country: 'Bhaktapur, Nepal',
      description: "Bharatpur, located in the Indian state of Rajasthan, is a captivating destination for tourists. Renowned for its enchanting Keoladeo National Park, a UNESCO World Heritage Site, Bharatpur offers a unique opportunity to explore diverse ecosystems and witness an array of avian species, making it a birdwatcher's paradise. The city also boasts a rich historical heritage, with attractions like the majestic Lohagarh Fort and the intricately designed Deeg Palace, offering a glimpse into its royal past.",
    },
  ];

  const data2 = [
    {
      imgUrl: require('../../assets/PhoksundoLake.jpg'),
      destination: 'Phoksundo Lake, Nepal',
      description: 'The journey to Shey Phoksundo Lake unfolds as a true adventure...',
      Price: '$45.00',
    },
    {
      imgUrl: require('../../assets/Ktm.jpg'),
      destination: 'Kathmandu, Nepal',
      description: 'The journey to Kathmandu unfolds as a true Heritage...',
      Price: '$60.00',
    },
    {
      imgUrl: require('../../assets/Mt.everest.jpg'),
      destination: 'Mt.Everest, Nepal',
      description: 'The journey to Shey Phoksundo Lake unfolds as a true adventure...',
      Price: '$90.00',
    },
  ];

  const onPressImg = item => {
    navigation.navigate(ROUTES.DESTINATION_DETAIL, {...item});
  };

  return (
    <ScrollView style={{flex: 1}}>
      <TextInput placeholder="  Search your place" style={styles.TextInput} />

      <SectionTitle title={'Special for you'} title2={'Explore'} />

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
              onPressImg(item);
            }}
          />
        )}
      />

      <SectionTitle title={'Popular Place'} title2={'Explore'} />

      <FlatList scrollEnabled={false}
        data={data2}
        renderItem={({ item }) =>
          <Section_Package
            imgUrl={item.imgUrl}
            destination={item.destination}
            description={item.description}
            Price={item.Price} />}
      />

    </ScrollView>
  );
};

export default DestinationUI;

const styles = StyleSheet.create({
  TextInput:{
    backgroundColor: 'white',
     marginHorizontal: 25, 
     marginTop: 2, 
     borderRadius: 15
  }
})
