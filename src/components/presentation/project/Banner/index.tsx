import { Image } from 'interfaces/image'
import * as S from './styles'

interface BannerProps {
  image: Image
  title: string
  description: string
}

export const Banner = ({ title, description, image }: BannerProps) => {
  return (
    <S.BannerWrapper>
      <S.LogoWrapper>
        <img src={image.url} alt={image.alt} />
      </S.LogoWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.BannerWrapper>
  )
}
