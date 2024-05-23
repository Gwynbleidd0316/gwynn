document.addEventListener("DOMContentLoaded", function () {
    // Hoş geldiniz mesajını ekrana yazdır
    var welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.textContent = 'Hoş Geldiniz';
    document.body.appendChild(welcomeMessage);
    // 3 saniye sonra mesajı kaldır
    setTimeout(function () {
        welcomeMessage.remove();
    }, 3000);

    var modal = document.getElementById("modal");
    var openModalButtons = document.querySelectorAll(".open-modal");

    openModalButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    });

    var closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // İletişim formunu yakalama
    var contactForm = document.getElementById('contact-form');

    // İletişim formuna submit olayı ekleme
    contactForm.addEventListener('submit', function (event) {
        // Sayfanın yeniden yüklenmesini engelleme
        event.preventDefault();

        // İletişim formunun içeriğini temizleme
        contactForm.reset();

        // Yeni bir div oluşturma
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = 'Biz size döneceğiz!';

        // Mesajı ekrana ekleme
        document.body.appendChild(messageDiv);

        // Belirli bir süre sonra mesajı kaldırma
        setTimeout(function () {
            messageDiv.remove();
        }, 3000); // 3 saniye sonra mesajı kaldır
    });

    document.querySelectorAll('.nav-item').forEach(function (item) {
        item.addEventListener('click', function () {
            document.getElementById('nav-links').classList.remove('responsive');
        });
    });

    window.addEventListener('DOMContentLoaded', function () {
        window.scrollTo(0, 0);
    });

    var titles = ['Hoş Geldiniz', 'Yaratıcılık Sınırsızdır'];
    var currentIndex = 0;
    var portfolioImages = document.querySelectorAll('.portfolio-item');
    portfolioImages.forEach(function (image, index) {
        image.addEventListener('click', function () {
            currentIndex = index;
            // Burada geçiş efekti yapabilirsiniz
        });
    });

    var currentPage = 'portfolio'; // Varsayılan olarak portföy sayfası
    document.querySelectorAll('.nav-item').forEach(function (item) {
        item.addEventListener('click', function () {
            currentPage = this.getAttribute('data-page'); // Sayfa adını al
            console.log('Current Page:', currentPage);
        });
    });

    function changeBackgroundColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }

    setInterval(changeBackgroundColor, 3000); // 3 saniyede bir değiştir

    window.addEventListener('resize', function () {
        console.log('Window Width:', window.innerWidth);
    });

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    window.addEventListener('beforeunload', function (event) {
        event.returnValue = 'Sayfayı yenilemek istediğinizden emin misiniz?';
    });

    window.addEventListener('scroll', function () {
        var visibility = window.pageYOffset > 100 ? 'visible' : 'hidden';
        console.log('Visibility:', visibility);
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('header').classList.add('animate__animated', 'animate__bounceIn');
    });

    console.log('Zaman Damgası:', new Date().toLocaleString());
    console.log('Geçerli URL:', window.location.href);

    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        this.classList.add('btn-clicked');
        setTimeout(function () {
            btn.classList.remove('btn-clicked');
        }, 500);
    });

    var portfolioItems = document.querySelectorAll('.portfolio-item');
    var currentIndex = 0;

    setInterval(function () {
        portfolioItems[currentIndex].classList.remove('pulse');
        currentIndex = (currentIndex + 1) % portfolioItems.length;
        portfolioItems[currentIndex].classList.add('pulse');
    }, 1000); // 1 saniye aralıklarla sırayla yanıp sönsün
});
document.addEventListener("DOMContentLoaded", function () {
    // İletişim formunu yakalama
    var contactForm = document.getElementById('contact-form');

    // Form içindeki woman ve man butonlarını yakalama
    var womanButton = document.querySelector('input[value="women"]');
    var manButton = document.querySelector('input[value="man"]');

    // Form butonlarına tıklama olayı ekleme
    womanButton.addEventListener('click', function (event) {
        event.preventDefault();
        showNotification('woman');
    });

    manButton.addEventListener('click', function (event) {
        event.preventDefault();
        showNotification('man');
    });


    
    // Bildirim fonksiyonu
    function showNotification(gender) {
        var messageDiv = document.getElementById('selected-message');
        messageDiv.textContent = 'You selected ' + gender;
    }

    // Portföy resmine tıklama olayı
    document.querySelectorAll('.portfolio-item img').forEach(function (img) {
        img.addEventListener('click', function () {
            alert('Portföy öğesine tıkladınız.');
        });
    });

    // 1. Fareyle üzerine gelince portföy resmini büyüt
    document.querySelectorAll('.portfolio-item img').forEach(function (img) {
        img.addEventListener('mouseover', function () {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', function () {
            img.style.transform = 'scale(1)';
        });
    });

    // 2. Ekran boyutu değiştiğinde bir mesaj yazdır
    window.addEventListener('resize', function () {
        console.log('Ekran boyutu değişti.');
    });

    // 3. Sayfa aşağı kaydırıldığında geri dön düğmesi göster
    window.addEventListener('scroll', function () {
        var scrollButton = document.querySelector('.scroll-to-top');
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // 4. Geri dön düğmesine tıklandığında sayfanın en üstüne kaydır
    document.querySelector('.scroll-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Portföy resmine tıklandığında bir mesaj göster
    document.querySelectorAll('.portfolio-item img').forEach(function (img) {
        img.addEventListener('click', function () {
            alert('Portföy öğesine tıkladınız.');
        });
    });

    // 6. Sayfa yüklenirken bir karşılama mesajı göster
    window.addEventListener('load', function () {
        alert('Sayfaya hoş geldiniz!');
    });

    // 7. Fareyle sayfada hareket ederken konsola koordinatları yazdır
    document.addEventListener('mousemove', function (event) {
        console.log('X: ' + event.clientX + ', Y: ' + event.clientY);
    });

    // 8. Portföy resmine çift tıklandığında bir mesaj göster
    document.querySelectorAll('.portfolio-item img').forEach(function (img) {
        img.addEventListener('dblclick', function () {
            alert('Portföy öğesine çift tıkladınız.');
        });
    });

    // 9. 3 saniyede bir portföy resimlerini değiştir
    var currentIndex = 0;
    var images = document.querySelectorAll('.portfolio-item img');
    setInterval(function () {
        images[currentIndex].classList.toggle('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.toggle('hidden');
    }, 3000);

    // 10. Sayfa yüklendiğinde 5 saniye sonra bir uyarı göster
    setTimeout(function () {
        alert('Sayfa yüklendi!');
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector(".btnc");
    var moreText = document.querySelector(".more");
    var dots = document.querySelector(".dots");

    btn.addEventListener("click", function() {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            moreText.style.display = "none";
            btn.innerHTML = "Read more";
        } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            btn.innerHTML = "Read less";
        }
    });
});

// jQuery kısmı
$(document).ready(function () {
    // 1. Sayfa yüklendiğinde bir mesaj göster
    $(window).on('load', function () {
        alert('Sayfa yüklendi!');
    });

    // 2. Fareyle bir butona tıklandığında rengini değiştir
    $('button').click(function () {
        $(this).css('background-color', 'red');
    });

    // 3. Fareyle bir div'in üzerine gelindiğinde büyüt
    $('.portfolio-item').hover(
        function () {
            $(this).animate({ width: '+=10px', height: '+=10px' }, 200);
        },
        function () {
            $(this).animate({ width: '-=10px', height: '-=10px' }, 200);
        }
    );

    // 4. Fareyle bir linke tıklandığında animasyonla kaydır
    $('a').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // 5. Bir butona tıklandığında mesaj göster
    $('.btn').click(function () {
        alert('Butona tıkladınız.');
    });

    // 6. Fareyle bir input alanına tıklandığında arka plan rengini değiştir
    $('input').focus(function () {
        $(this).css('background-color', 'yellow');
    }).blur(function () {
        $(this).css('background-color', '');
    });

    // 7. Sayfa yüklendiğinde karşılama mesajı göster
    $('body').prepend('<div class="welcome-message">Hoş Geldiniz</div>');
    setTimeout(function () {
        $('.welcome-message').fadeOut('slow');
    }, 3000);

    // 8. Fareyle bir portföy resmine tıklandığında büyüt
    $('.portfolio-item img').click(function () {
        $(this).animate({ width: '+=20px', height: '+=20px' }, 200).animate({ width: '-=20px', height: '-=20px' }, 200);
    });

    // 9. Sayfa aşağı kaydırıldığında geri dön düğmesi göster
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // 10. Geri dön düğmesine tıklandığında sayfanın en üstüne kaydır
    $('.scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // 11. Bir input alanına yazı yazıldığında karakter sayısını göster
    $('input').on('input', function () {
        var charCount = $(this).val().length;
        $(this).next('.char-count').text(charCount + ' karakter');
    });

    // 12. Sayfa yüklendiğinde portföy öğelerini sırayla göster
    $('.portfolio-item').each(function (index) {
        $(this).delay(index * 500).fadeIn(1000);
    });

    // 13. Fareyle bir butona tıklandığında dönme efekti ver
    $('.btn').click(function () {
        $(this).addClass('rotate');
        setTimeout(function () {
            $('.btn').removeClass('rotate');
        }, 1000);
    });

    // 14. Portföy resimleri arasında 2 saniyede bir geçiş yap
    var currentIndex = 0;
    setInterval(function () {
        $('.portfolio-item img').eq(currentIndex).fadeOut(500, function () {
            currentIndex = (currentIndex + 1) % $('.portfolio-item img').length;
            $('.portfolio-item img').eq(currentIndex).fadeIn(500);
        });
    }, 2000);

    // 15. Fareyle bir div'in üzerine gelindiğinde gölgelendirme ekle
    $('.portfolio-item').hover(
        function () {
            $(this).css('box-shadow', '0 0 10px #000');
        },
        function () {
            $(this).css('box-shadow', 'none');
        }
    );
});

// Devam metnini gizle
$(".btnc").click(function() {
    // Eğer devam metni gizli değilse ve buton "Read more" ise devam metnini göster
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).prev(".content").children("p").text(devamMetni);
        $(this).text("Read less");
    } else { // Eğer devam metni görünürse ve buton "Read less" ise devam metnini gizle
        $(this).addClass("less");
        $(this).prev(".content").children("p").text(devamMetni.substring(0, 100) + '...'); // İlk 100 karakteri göster
        $(this).text("Read more");
    }
});
    function animateText() {
        const text = document.querySelector('.sliding-text');
        let position = 0;
        let direction = 1;

        function slide() {
            position += direction * 2; // Kayma hızını belirler
            text.style.transform = `translateX(${position}px)`;

            if (position > 20 || position < 0) { // Kayma sınırlarını belirler
                direction *= -1;
            }

            requestAnimationFrame(slide);
        }

        slide();
    }

    document.addEventListener('DOMContentLoaded', animateText);

    $(document).ready(function() {
        $('#profile-image').hover(
            function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            }
        );
    });
    $(document).ready(function () {
        // Sayfa yüklendiğinde hareketi başlat
        moveRight();
    });
    
    function moveRight() {
        var windowWidth = $(window).width(); // Sayfanın genişliğini al
        var arabaWidth = $('.araba').width(); // Arabanın genişliğini al
    
        // Arabayı sayfanın genişliğinin dışında başlat
        $('.araba').css('left', windowWidth + 'px');
    
        // Arabayı animasyonla sağa doğru hareket ettir
        $('.araba').animate({ left: '-=' + (windowWidth + arabaWidth) }, 5000, 'linear', function () {
            // Hareket tamamlandığında başa dön
            moveRight();
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
        // 1. Hoş geldiniz mesajını ekrana yazdır
        var welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');
        welcomeMessage.textContent = 'Hoş Geldiniz';
        document.body.appendChild(welcomeMessage);
        // 3 saniye sonra mesajı kaldır
        setTimeout(function () {
            welcomeMessage.remove();
        }, 3000);
    
        // . Modal açma ve kapama
        var modal = document.getElementById("modal");
        var openModalButtons = document.querySelectorAll(".open-modal");
        openModalButtons.forEach(function (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                modal.style.display = "block";
            });
        });
        var closeButtons = document.querySelectorAll(".close-button");
        closeButtons.forEach(function (closeButton) {
            closeButton.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    
        //  İletişim formunu yakalama
        var contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            contactForm.reset();
            var messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.textContent = 'Biz size döneceğiz!';
            document.body.appendChild(messageDiv);
            setTimeout(function () {
                messageDiv.remove();
            }, 3000);
        });
    
        //  Menüyü küçültme
        document.querySelectorAll('.nav-item').forEach(function (item) {
            item.addEventListener('click', function () {
                document.getElementById('nav-links').classList.remove('responsive');
            });
        });
    
        //  Sayfa yüklenince en üste kaydır
        window.addEventListener('DOMContentLoaded', function () {
            window.scrollTo(0, 0);
        });
    
        // Portfolio item click event
        var titles = ['Hoş Geldiniz', 'Yaratıcılık Sınırsızdır'];
        var currentIndex = 0;
        var portfolioImages = document.querySelectorAll('.portfolio-item');
        portfolioImages.forEach(function (image, index) {
            image.addEventListener('click', function () {
                currentIndex = index;
            });
        });
    
        //  Current page log
        var currentPage = 'portfolio';
        document.querySelectorAll('.nav-item').forEach(function (item) {
            item.addEventListener('click', function () {
                currentPage = this.getAttribute('data-page');
                console.log('Current Page:', currentPage);
            });
        });
    
        //  Background color change
        function changeBackgroundColor() {
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        }
        setInterval(changeBackgroundColor, 3000);
    
        // Window resize event
        window.addEventListener('resize', function () {
            console.log('Window Width:', window.innerWidth);
        });
    
        //  Scroll events
        window.addEventListener('scroll', function () {
            var visibility = window.pageYOffset > 100 ? 'visible' : 'hidden';
            console.log('Visibility:', visibility);
        });
    
        //  Header animation on load
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('header').classList.add('animate__animated', 'animate__bounceIn');
        });
    
        //  Button click animation
        var btn = document.querySelector('.btn');
        btn.addEventListener('click', function () {
            this.classList.add('btn-clicked');
            setTimeout(function () {
                btn.classList.remove('btn-clicked');
            }, 500);
        });
    
        //  Portfolio item pulse
        var portfolioItems = document.querySelectorAll('.portfolio-item');
        var currentIndex = 0;
        setInterval(function () {
            portfolioItems[currentIndex].classList.remove('pulse');
            currentIndex = (currentIndex + 1) % portfolioItems.length;
            portfolioItems[currentIndex].classList.add('pulse');
        }, 1000);
    
        //  Woman and man button click
        var womanButton = document.querySelector('input[value="women"]');
        var manButton = document.querySelector('input[value="man"]');
        womanButton.addEventListener('click', function (event) {
            event.preventDefault();
            showNotification('woman');
        });
        manButton.addEventListener('click', function (event) {
            event.preventDefault();
            showNotification('man');
        });
        function showNotification(gender) {
            var messageDiv = document.getElementById('selected-message');
            messageDiv.textContent = 'You selected ' + gender;
        }
    
        //  Portfolio image click event
        document.querySelectorAll('.portfolio-item img').forEach(function (img) {
            img.addEventListener('click', function () {
                alert('Portföy öğesine tıkladınız.');
            });
        });
    
        //  Portfolio image hover effect
        document.querySelectorAll('.portfolio-item img').forEach(function (img) {
            img.addEventListener('mouseover', function () {
                img.style.transform = 'scale(1.1)';
            });
            img.addEventListener('mouseout', function () {
                img.style.transform = 'scale(1)';
            });
        });
    
        //  Scroll button show on scroll
        var scrollButton = document.querySelector('.scroll-to-top');
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
    
        //  Scroll to top button click
        scrollButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    
        //  Mouse coordinates log
        document.addEventListener('mousemove', function (event) {
            console.log('X: ' + event.clientX + ', Y: ' + event.clientY);
        });
    
        //  Portfolio image double click event
        document.querySelectorAll('.portfolio-item img').forEach(function (img) {
            img.addEventListener('dblclick', function () {
                alert('Portföy öğesine çift tıkladınız.');
            });
        });
    
        //  Portfolio image toggle
        setInterval(function () {
            images[currentIndex].classList.toggle('hidden');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.toggle('hidden');
        }, 3000);
    
        // Page loaded alert after 5 seconds
        setTimeout(function () {
            alert('Sayfa yüklendi!');
        }, 5000);
    
        //  Read more button
        var btnRead = document.querySelector(".btnc");
        var moreText = document.querySelector(".more");
        var dots = document.querySelector(".dots");
        btnRead.addEventListener("click", function() {
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                moreText.style.display = "none";
                btnRead.innerHTML = "Read more";
            } else {
                dots.style.display = "none";
                moreText.style.display = "inline";
                btnRead.innerHTML = "Read less";
            }
        });
    
        //  Text sliding animation
        function animateText() {
            const text = document.querySelector('.sliding-text');
            let position = 0;
            let direction = 1;
            function slide() {
                position += direction * 2;
                text.style.transform = `translateX(${position}px)`;
                if (position > 20 || position < 0) {
                    direction *= -1;
                }
                requestAnimationFrame(slide);
            }
            slide();
        }
        animateText();
    
        //  Profile image hover
        $('#profile-image').hover(
            function() {
                $(this).addClass('hover');
            }, function() {
                $(this).removeClass('hover');
            }
        );
    
        //  Animate car
        function moveRight() {
            var windowWidth = $(window).width();
            var arabaWidth = $('.araba').width();
            $('.araba').css('left', windowWidth + 'px');
            $('.araba').animate({ left: '-=' + (windowWidth + arabaWidth) }, 5000, 'linear', function () {
                moveRight();
            });
        }
        moveRight();
    
        // Toggle sidebar
        var sidebarToggleBtn = document.querySelector('.toggle-sidebar');
        var sidebar = document.querySelector('.sidebar');
        sidebarToggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    
        //  Show/hide password
        var passwordInput = document.querySelector('.password-input');
        var togglePasswordBtn = document.querySelector('.toggle-password');
        togglePasswordBtn.addEventListener('click', function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });
    
        //Ajax request to server
        var ajaxBtn = document.querySelector('.ajax-btn');
        ajaxBtn.addEventListener('click', function () {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET',
                success: function (data) {
                    console.log(data);
                },
                error: function (error) {
                    console.error(error);
                }
            });
        });
    
        //  Smooth scroll to section
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
        //  Automatic carousel
        var carouselIndex = 0;
        function showCarouselSlide() {
            var slides = document.querySelectorAll('.carousel-slide');
            slides.forEach(slide => slide.style.display = 'none');
            carouselIndex++;
            if (carouselIndex > slides.length) { carouselIndex = 1; }
            slides[carouselIndex - 1].style.display = 'block';
            setTimeout(showCarouselSlide, 2000);
        }
        showCarouselSlide();
    
        //  Copy to clipboard
        var copyTextBtn = document.querySelector('.copy-text-btn');
        var copyTextInput = document.querySelector('.copy-text-input');
        copyTextBtn.addEventListener('click', function () {
            copyTextInput.select();
            document.execCommand('copy');
            alert('Text copied to clipboard');
        });
    });
    
// Fonksiyon  Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonksiyon Modal Açma
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Fonksiyon Modal Kapatma
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fonksiyon  Nav Toggle
function toggleNav() {
    document.getElementById('nav-links').classList.toggle('responsive');
}


// Fonksiyon Portfolio Item Hover Effect
function addPortfolioHoverEffect() {
    document.querySelectorAll('.portfolio-item img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.classList.add('pulse');
        });
        img.addEventListener('mouseout', () => {
            img.classList.remove('pulse');
        });
    });
}

// Portfolio hover efektini ekleyelim
addPortfolioHoverEffect();

// Fonksiyon  Form Doğrulama
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name == "" || email == "") {
        alert("Name and Email must be filled out");
        return false;
    }
    return true;
}

// Fonksiyon Element Gizleme
function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

// Fonksiyon  Element Gösterme
function showElement(id) {
    document.getElementById(id).style.display = 'block';
}

// Fonksiyon Sayfa Yüklenirken Animasyon Göster
function showLoadingAnimation() {
    let loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = 'Loading...';
    document.body.appendChild(loading);
}

// Fonksiyon  Sayfa Yüklenince Animasyonu Kaldır
function hideLoadingAnimation() {
    document.getElementById('loading').remove();
}

// Fonksiyon Rastgele Arkaplan Rengi Ayarla
function setRandomBackgroundColor() {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Fonksiyon  Scroll Position Kaydetme
function saveScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY);
}

// Fonksiyon  Scroll Position Yükleme
function loadScrollPosition() {
    if (localStorage.getItem('scrollPosition')) {
        window.scrollTo(0, localStorage.getItem('scrollPosition'));
    }
}

// Fonksiyon  Sayfa Yenilenince Scroll Position'u Yükle
window.addEventListener('load', loadScrollPosition);
window.addEventListener('beforeunload', saveScrollPosition);
// Fonksiyon Tarih ve Saat Göster
function showDateTime() {
    let now = new Date();
    alert(now.toLocaleString());
}

// Fonksiyon  Portfolio Öğesine Tıklama
function portfolioItemClick() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            alert('Portfolio item clicked!');
        });
    });
}
//tema

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}


// Fonksiyon  Arkaplan Görseli Değiştirme
function changeBackgroundImage(url) {
    document.body.style.backgroundImage = `url(${url})`;
}

// Fonksiyon  Fare Takipçisi
function mouseFollower() {
    let follower = document.createElement('div');
    follower.id = 'mouse-follower';
    follower.style.width = '20px';
    follower.style.height = '20px';
    follower.style.backgroundColor = 'red';
    follower.style.position = 'absolute';
    follower.style.borderRadius = '50%';
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.pageX + 'px';
        follower.style.top = e.pageY + 'px';
    });
}

// Fonksiyon  Element Sürükle
function makeDraggable(el) {
    el.addEventListener('mousedown', function(e) {
        let offsetX = e.clientX - parseInt(window.getComputedStyle(el).left);
        let offsetY = e.clientY - parseInt(window.getComputedStyle(el).top);

        function mouseMoveHandler(e) {
            el.style.top = (e.clientY - offsetY) + 'px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}
// Fonksiyon Her 5 Saniyede Bir Mesaj Göster
function showMessageEveryFiveSeconds() {
    setInterval(() => {
        alert('This is a periodic message.');
    }, 5000);
}


// Fonksiyon 23: Açılır Bildirim
function showNotification(message) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Fonksiyon 24: Fare Üzerine Gelince Renk Değiştir
function changeColorOnHover(element, color) {
    element.addEventListener('mouseover', () => {
        element.style.color = color;
    });
    element.addEventListener('mouseout', () => {
        element.style.color = '';
    });
}

// Fonksiyon 25: Geri Sayım Başlat
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Fonksiyon 26: Element Pulse Animasyonu
function addPulseAnimation(element) {
    element.classList.add('pulse');
}

// Fonksiyon  Element Pulse Animasyonunu Kaldır
function removePulseAnimation(element) {
    element.classList.remove('pulse');
}



// Fonksiyon  Alert Mesajı Göster
function showAlert(message) {
    alert(message);
}

// Fonksiyon Yeni Sekmede Bağlantı Aç
function openLinkInNewTab(url) {
    window.open(url, '_blank');
}
