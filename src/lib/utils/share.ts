import { toast } from 'sonner';

export interface ShareData {
  title: string;
  description: string;
  url: string;
}

export const canShare = typeof navigator !== 'undefined' && 'share' in navigator && typeof navigator.share === 'function';
export const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Bağlantı kopyalandı');
  } catch (err) {
    console.error('Failed to copy URL:', err);
    toast.error('Bağlantı kopyalanamadı');
  }
}

export async function nativeShare(data: ShareData): Promise<void> {
  if (!canShare) return;

  try {
    await navigator.share({
      title: data.title,
      text: data.description,
      url: data.url,
    });
    toast.success('Başarıyla paylaşıldı');
  } catch (err) {
    if ((err as Error).name !== 'AbortError') {
      console.error('Error sharing:', err);
      toast.error('Paylaşım başarısız oldu');
    }
  }
}

export function getWhatsAppUrl(data: ShareData): string {
  const text = `${data.title}\n\n${data.description}\n\n${data.url}`;
  return isMobile
    ? `whatsapp://send?text=${encodeURIComponent(text)}`
    : `https://web.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}

export function getSocialShareUrls(data: ShareData) {
  const encodedUrl = encodeURIComponent(data.url);
  const encodedTitle = encodeURIComponent(data.title);
  const encodedDescription = encodeURIComponent(data.description);

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%0A%0A${encodedDescription}`,
    whatsapp: getWhatsAppUrl(data),
  };
}