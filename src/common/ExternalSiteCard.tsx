import Image from 'next/image'

interface ExternalSiteCardProps{
    siteName: string;
    siteUrl: string;
    siteIcon: string;
    siteIconDescription?: string;
}

const ExternalSiteCard = (props: ExternalSiteCardProps) => {
return (
    <div key={props.siteName}>
    <a
      href={props.siteUrl}
      target="_brank"
      rel="noopener noreferrer"
    >
      <h3> 
        <Image
          // className={styles.logo}
          src={props.siteIcon}
          alt={props.siteIconDescription || props.siteName}
          width="20"
          height="20"
          priority
        />
        {props.siteName}
      </h3>
    </a>
    </div>
);
};

export default ExternalSiteCard;

