import Link from 'next/link'
import styles from './LogoLink.module.scss'

export default async function LogoLink() {
  return (
    <Link href="/" className={styles.logoLink}>
      <svg
        aria-label="SuprNotes logotype"
        xmlns="http://www.w3.org/2000/svg"
        width="740"
        height="137"
        fill="none">
        <path
          fill="currentColor"
          d="M736.867 28.27 711.729 3.139a8.992 8.992 0 0 0-6.364-2.637A9.002 9.002 0 0 0 699 3.138L629.638 72.5A8.93 8.93 0 0 0 627 78.862V104a9 9 0 0 0 9 9h94.5a4.5 4.5 0 0 0 0-9h-56.633l63-63a8.993 8.993 0 0 0 1.952-9.81 8.994 8.994 0 0 0-1.952-2.92ZM685.5 29.363l9.388 9.388-47.638 47.638L637.862 77 685.5 29.362ZM636 104V87.862L652.138 104H636Zm27-1.862-9.383-9.388 47.633-47.638 9.388 9.388L663 102.138Zm54-54L691.867 23l13.5-13.5L730.5 34.638l-13.5 13.5ZM65.432 46.616c.085-3.584-.384-6.57-1.408-8.96-.939-2.475-2.347-4.437-4.224-5.888-1.792-1.536-4.01-2.603-6.656-3.2-2.645-.597-5.547-.896-8.704-.896-2.219 0-4.565.299-7.04.896a24.008 24.008 0 0 0-6.912 2.56 16.586 16.586 0 0 0-5.12 4.608c-1.365 1.877-2.048 4.181-2.048 6.912 0 2.219.384 4.139 1.152 5.76a14.338 14.338 0 0 0 3.072 4.096c1.365 1.11 2.944 2.048 4.736 2.816 1.877.768 3.84 1.45 5.888 2.048l12.288 3.328a55.081 55.081 0 0 1 8.192 2.944c2.645 1.11 4.992 2.603 7.04 4.48 2.048 1.792 3.67 4.096 4.864 6.912 1.28 2.816 1.92 6.272 1.92 10.368 0 4.779-1.11 8.917-3.328 12.416-2.133 3.413-4.907 6.272-8.32 8.576-3.413 2.219-7.253 3.883-11.52 4.992-4.181 1.109-8.32 1.664-12.416 1.664-5.461 0-10.496-.64-15.104-1.92-4.608-1.195-8.533-3.072-11.776-5.632-3.157-2.56-5.59-5.845-7.296-9.856C1.091 91.544.493 86.68.92 81.048h12.16c-.17 4.096.299 7.552 1.408 10.368 1.11 2.816 2.73 5.077 4.864 6.784 2.219 1.707 4.864 2.944 7.936 3.712 3.072.683 6.443 1.024 10.112 1.024 2.816 0 5.59-.341 8.32-1.024 2.816-.683 5.29-1.707 7.424-3.072a16.625 16.625 0 0 0 5.12-5.504c1.365-2.219 2.048-4.864 2.048-7.936 0-2.304-.427-4.267-1.28-5.888a11.447 11.447 0 0 0-3.584-4.224c-1.45-1.195-3.157-2.176-5.12-2.944a60.046 60.046 0 0 0-6.272-2.048L31.64 66.968a47.498 47.498 0 0 1-7.808-2.944c-2.475-1.28-4.65-2.816-6.528-4.608a21.695 21.695 0 0 1-4.48-6.528c-1.11-2.56-1.664-5.547-1.664-8.96 0-4.437.981-8.277 2.944-11.52 1.963-3.328 4.48-6.101 7.552-8.32 3.157-2.219 6.699-3.883 10.624-4.992a45.418 45.418 0 0 1 12.16-1.664c4.523 0 8.79.597 12.8 1.792 4.096 1.11 7.68 2.859 10.752 5.248 3.072 2.304 5.461 5.29 7.168 8.96 1.792 3.67 2.603 8.064 2.432 13.184h-12.16ZM134.608 111h-10.496l2.048-9.984h-.256c-2.731 3.84-6.187 6.699-10.368 8.576a31.836 31.836 0 0 1-13.184 2.816c-6.23 0-10.88-1.323-13.952-3.968-2.987-2.731-4.48-7.04-4.48-12.928 0-1.45.17-3.328.512-5.632.341-2.304.81-4.736 1.408-7.296l8.064-37.76h10.88L96.336 83.48c-.17.597-.341 1.365-.512 2.304-.17.939-.341 1.92-.512 2.944-.17.939-.299 1.877-.384 2.816a22.419 22.419 0 0 0-.128 2.176c0 3.157 1.11 5.504 3.328 7.04 2.219 1.451 4.949 2.176 8.192 2.176 3.072 0 5.888-.597 8.448-1.792a24.909 24.909 0 0 0 7.04-4.736 29.054 29.054 0 0 0 5.12-6.912c1.451-2.645 2.475-5.333 3.072-8.064l7.68-36.608h10.88L134.608 111ZM166.181 44.824h10.24l-2.304 9.472h.256c3.243-4.267 6.571-7.168 9.984-8.704 3.499-1.536 7.467-2.304 11.904-2.304 4.267 0 7.979.683 11.136 2.048 3.243 1.28 5.973 3.115 8.192 5.504 2.219 2.39 3.883 5.248 4.992 8.576 1.109 3.328 1.664 6.997 1.664 11.008 0 5.035-.853 10.07-2.56 15.104-1.621 4.95-4.011 9.43-7.168 13.44-3.072 4.011-6.912 7.253-11.52 9.728-4.523 2.475-9.685 3.712-15.488 3.712-1.963 0-4.053-.171-6.272-.512a25.426 25.426 0 0 1-6.144-1.792 21.286 21.286 0 0 1-5.12-3.584c-1.451-1.536-2.475-3.413-3.072-5.632h-.256l-7.04 35.328h-10.624l19.2-91.392Zm45.184 25.6c0-5.376-1.365-9.643-4.096-12.8-2.645-3.157-6.955-4.736-12.928-4.736-4.096 0-7.765 1.067-11.008 3.2a29.472 29.472 0 0 0-8.192 8.064c-2.133 3.243-3.797 6.784-4.992 10.624-1.109 3.84-1.664 7.51-1.664 11.008 0 4.95 1.408 9.045 4.224 12.288 2.901 3.243 7.04 4.864 12.416 4.864 4.352 0 8.149-.981 11.392-2.944a28.565 28.565 0 0 0 8.192-7.808c2.219-3.157 3.883-6.656 4.992-10.496 1.109-3.84 1.664-7.595 1.664-11.264ZM242.184 44.824h10.24l-3.2 14.208h.256c2.56-4.523 5.803-8.277 9.728-11.264 4.011-2.987 8.789-4.48 14.336-4.48.683 0 1.323-.043 1.92-.128s1.237-.043 1.92.128l-2.56 11.648c-.341-.085-.896-.128-1.664-.128h-1.536c-1.365 0-2.475.043-3.328.128-.853 0-1.92.17-3.2.512a21.615 21.615 0 0 0-8.064 3.968c-2.304 1.877-4.309 4.139-6.016 6.784-1.451 2.133-2.603 4.65-3.456 7.552-.853 2.816-1.536 5.461-2.048 7.936L239.24 111h-10.752l13.696-66.176ZM291.849 19.608h13.056l32.64 75.648h.256l15.232-75.648h11.776L345.481 111h-13.056l-32.384-75.136h-.256L284.297 111h-11.776l19.328-91.392ZM366.176 84.888c0-5.376.811-10.581 2.432-15.616 1.707-5.035 4.139-9.472 7.296-13.312 3.243-3.84 7.125-6.912 11.648-9.216 4.608-2.304 9.813-3.456 15.616-3.456 8.96 0 15.787 2.347 20.48 7.04 4.693 4.608 7.04 11.392 7.04 20.352 0 5.376-.811 10.581-2.432 15.616s-4.011 9.515-7.168 13.44c-3.157 3.84-6.997 6.912-11.52 9.216-4.523 2.304-9.685 3.456-15.488 3.456-4.352 0-8.277-.683-11.776-2.048-3.413-1.365-6.315-3.243-8.704-5.632-2.389-2.475-4.224-5.376-5.504-8.704-1.28-3.413-1.92-7.125-1.92-11.136Zm10.88-.128c0 5.461 1.536 9.856 4.608 13.184 3.072 3.328 7.595 4.992 13.568 4.992 4.011 0 7.509-1.024 10.496-3.072a27.424 27.424 0 0 0 7.68-7.68 34.965 34.965 0 0 0 4.736-10.24c1.109-3.67 1.664-7.125 1.664-10.368 0-2.56-.341-4.992-1.024-7.296-.683-2.304-1.749-4.267-3.2-5.888-1.451-1.707-3.285-3.03-5.504-3.968-2.133-1.024-4.693-1.536-7.68-1.536-4.181 0-7.851 1.024-11.008 3.072a27.663 27.663 0 0 0-7.936 7.808c-2.133 3.072-3.755 6.485-4.864 10.24-1.024 3.755-1.536 7.339-1.536 10.752ZM465.788 44.824h13.184l-2.048 9.6H463.74l-8.192 38.912a160.42 160.42 0 0 1-.256 2.176 17.628 17.628 0 0 0-.128 2.176c0 1.707.64 2.901 1.92 3.584 1.365.597 2.901.896 4.608.896a19.41 19.41 0 0 0 3.2-.256 41.844 41.844 0 0 0 3.072-.896l-1.92 9.984c-1.28.171-2.56.299-3.84.384-1.28.171-2.56.256-3.84.256-2.048 0-3.968-.171-5.76-.512-1.792-.256-3.371-.768-4.736-1.536-1.28-.853-2.347-1.963-3.2-3.328-.768-1.365-1.152-3.115-1.152-5.248 0-.939.043-1.835.128-2.688.171-.853.341-1.792.512-2.816l8.704-41.088h-11.136l2.048-9.6h11.136l4.096-19.584h10.88l-4.096 19.584ZM490.419 81.176a42.588 42.588 0 0 0-.384 5.76c0 2.56.469 4.864 1.408 6.912a14.782 14.782 0 0 0 3.84 4.992c1.621 1.28 3.456 2.304 5.504 3.072a20.094 20.094 0 0 0 6.4 1.024c4.864 0 8.875-1.067 12.032-3.2 3.157-2.219 5.504-5.376 7.04-9.472h10.88c-.853 3.67-2.219 6.912-4.096 9.728a27.49 27.49 0 0 1-6.784 6.912c-2.645 1.792-5.589 3.157-8.832 4.096-3.243.939-6.656 1.408-10.24 1.408-5.461 0-10.027-.811-13.696-2.432-3.584-1.707-6.443-3.84-8.576-6.4-2.133-2.645-3.627-5.504-4.48-8.576-.853-3.157-1.28-6.187-1.28-9.088 0-6.315.896-12.075 2.688-17.28 1.877-5.29 4.352-9.813 7.424-13.568 3.157-3.755 6.784-6.656 10.88-8.704 4.181-2.048 8.533-3.072 13.056-3.072 9.728 0 16.811 2.56 21.248 7.68 4.523 5.12 6.784 12.33 6.784 21.632 0 1.707-.128 3.328-.384 4.864a263.039 263.039 0 0 1-.64 3.712h-49.792Zm39.936-9.6a22.57 22.57 0 0 0-.512-6.784c-.427-2.304-1.28-4.31-2.56-6.016-1.195-1.792-2.816-3.2-4.864-4.224-2.048-1.11-4.565-1.664-7.552-1.664-3.157 0-6.016.512-8.576 1.536-2.475.939-4.651 2.261-6.528 3.968-1.877 1.707-3.456 3.712-4.736 6.016a33.615 33.615 0 0 0-3.072 7.168h38.4ZM592.065 64.28c.171-3.755-1.109-6.57-3.84-8.448-2.731-1.963-6.016-2.944-9.856-2.944-1.621 0-3.285.128-4.992.384-1.707.256-3.243.725-4.608 1.408a8.523 8.523 0 0 0-3.2 2.56c-.853 1.024-1.28 2.39-1.28 4.096 0 1.536.469 2.859 1.408 3.968 1.024 1.11 2.347 2.133 3.968 3.072a57.947 57.947 0 0 0 5.632 2.688c2.133.768 4.267 1.579 6.4 2.432a73.783 73.783 0 0 1 6.4 3.072c2.133 1.11 4.011 2.39 5.632 3.84 1.621 1.365 2.944 3.03 3.968 4.992 1.024 1.877 1.536 4.096 1.536 6.656 0 3.67-.811 6.827-2.432 9.472a19.998 19.998 0 0 1-6.272 6.272c-2.56 1.621-5.461 2.773-8.704 3.456a40.47 40.47 0 0 1-9.6 1.152c-3.84 0-7.381-.384-10.624-1.152-3.243-.683-6.059-1.877-8.448-3.584-2.304-1.707-4.139-3.968-5.504-6.784-1.365-2.901-2.048-6.485-2.048-10.752h10.752c-.171 2.39.171 4.437 1.024 6.144a11.818 11.818 0 0 0 3.712 3.968c1.621.939 3.456 1.621 5.504 2.048a33.84 33.84 0 0 0 6.656.64 28.7 28.7 0 0 0 5.376-.512c1.792-.341 3.413-.896 4.864-1.664 1.451-.853 2.603-1.92 3.456-3.2.939-1.28 1.408-2.859 1.408-4.736 0-1.621-.512-2.987-1.536-4.096-1.024-1.195-2.347-2.261-3.968-3.2-1.621-.939-3.499-1.792-5.632-2.56a344.78 344.78 0 0 1-6.272-2.688 88.338 88.338 0 0 1-6.528-2.816 31.622 31.622 0 0 1-5.632-3.584 18.635 18.635 0 0 1-3.968-4.992c-.939-1.877-1.408-4.053-1.408-6.528 0-3.072.683-5.803 2.048-8.192a18.572 18.572 0 0 1 5.632-5.888c2.304-1.621 4.907-2.859 7.808-3.712a32.93 32.93 0 0 1 9.088-1.28c3.072 0 6.101.384 9.088 1.152 2.987.683 5.632 1.877 7.936 3.584 2.389 1.621 4.309 3.797 5.76 6.528 1.451 2.645 2.176 5.888 2.176 9.728h-10.88Z"
        />
      </svg>
    </Link>
  )
}
