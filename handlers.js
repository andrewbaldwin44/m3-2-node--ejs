const baconImages = [
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcrushmag-online.com%2Fwp-content%2Fuploads%2F2014%2F10%2FWallpapers_Bacon_1856x1161.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.joeydevilla.com%2Fwordpress%2Fwp-content%2Fuploads%2F2010%2F07%2FBaconSpaceKitty.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkindnessblogdotcom1.files.wordpress.com%2F2015%2F12%2Ffunny_bacon_hd-wallpaper-10495141.jpg&f=1&nofb=1',
  'http://4.bp.blogspot.com/-AnxJjzI6i9o/UKlpxLQz5yI/AAAAAAAAE6o/uNdRe-O1Ufs/s1600/baconisbetter1.gif',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwanna-joke.com%2Fwp-content%2Fuploads%2F2014%2F09%2Ffunny-bacon-woman-kill-man.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F91%2F93%2Fc3%2F9193c3ed6b21fe4223291fed5c721b17--bacon-bits-bacon-bacon.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dumpaday.com%2Fwp-content%2Fuploads%2F2013%2F05%2Fbacon.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F45383-quote-minimalism-white_background-bacon-information-748x561.png&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F95%2F8e%2F77%2F958e77c979af2007a03972a9cf973ea7.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8f%2Ffd%2Fee%2F8ffdeeb7332d8832dbabda60f689992c.png&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F86%2Fe1%2Fac%2F86e1ac930ce264c12b7a3a565166be2f.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheavyeditorial.files.wordpress.com%2F2015%2F12%2Fbacon-quote-10.jpg%3Fquality%3D65%26strip%3Dall%26w%3D780&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbacontoday.com%2Fwp-content%2Fuploads%2F2013%2F06%2Fvpq.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.baconcoma.com%2Fwp-content%2Fuploads%2F2014%2F10%2FBacon-in-both-hands.jpg&f=1&nofb=1'];

exports.getBaconImage = () => {
  return baconImages[Math.floor(Math.random() * baconImages.length)];
}
